from collections.abc import AsyncGenerator
from typing import Any

import pytest
from fakeredis.aioredis import FakeRedis
from fastapi import FastAPI
from httpx import ASGITransport, AsyncClient
from sqlalchemy.ext.asyncio import (
    AsyncEngine,
    AsyncSession,
    async_sessionmaker,
    create_async_engine,
)

from Medkhan.daos import AllDAOs
from Medkhan.db import meta
from Medkhan.db.db_dependencies import get_db_session
from Medkhan.main import get_app
from Medkhan.services.redis.redis_dependencies import get_redis
from Medkhan.settings import settings
from tests.factories import BaseFactory
from tests.test_utils import create_test_db, drop_test_db


@pytest.fixture(scope="session")
def anyio_backend() -> str:
    """Set the backend for the anyio plugin."""
    return "asyncio"


@pytest.fixture(scope="session")
async def engine() -> AsyncGenerator[AsyncEngine, None]:
    """
    Create and manage the lifecycle of the test database engine.

    This fixture sets up a test database by creating all required tables
    and then tears it down after the tests have finished executing.
    It yields an instance of `AsyncEngine` for database operations.
    """
    await create_test_db()
    engine = create_async_engine(str(settings.db.url))

    async with engine.begin() as conn:
        await conn.run_sync(meta.create_all)

    try:
        yield engine
    finally:
        await engine.dispose()
        await drop_test_db()


@pytest.fixture
async def db_session(
    engine: AsyncEngine,
) -> AsyncGenerator[AsyncSession, None]:
    """
    Provide a database session for tests, with automatic cleanup.

    A database session is created for each test using the provided database engine.
    Changes made within the session are rolled back after the test completes to
    maintain database integrity across tests.
    """
    connection = await engine.connect()
    tx = await connection.begin()
    session_factory = async_sessionmaker(connection, expire_on_commit=False)
    session = session_factory()

    try:
        yield session
    finally:
        await session.close()
        await tx.rollback()
        await connection.close()


@pytest.fixture(autouse=True)
def inject_session(db_session: AsyncSession) -> None:
    """For each test, inject a database session into the BaseFactory."""
    BaseFactory.session = db_session


@pytest.fixture
async def mock_redis() -> AsyncGenerator[FakeRedis, None]:
    """Provide a fake Redis instance."""
    client = FakeRedis()
    yield client
    await client.aclose()


@pytest.fixture
def overwritten_deps(
    db_session: AsyncSession,
    mock_redis: FakeRedis,
) -> dict[Any, Any]:
    """Override dependencies for the test app."""
    return {
        get_db_session: lambda: db_session,
        get_redis: lambda: mock_redis,
    }


@pytest.fixture(scope="session")
def session_app() -> FastAPI:
    """Provide the FastAPI app instance (session-wide)."""
    return get_app()


@pytest.fixture
def app(session_app: FastAPI, overwritten_deps: dict[Any, Any]) -> FastAPI:
    """Provide the FastAPI app instance (per test)."""
    session_app.dependency_overrides.update(overwritten_deps)
    return session_app


@pytest.fixture
async def client(app: FastAPI) -> AsyncGenerator[AsyncClient, None]:
    """Provide a test client for the FastAPI app."""
    async with AsyncClient(
        transport=ASGITransport(app=app), base_url="http://test"
    ) as ac:
        yield ac


@pytest.fixture
async def daos(db_session: AsyncSession) -> AllDAOs:
    """Provide access to all DAOs."""
    return AllDAOs(db_session)
