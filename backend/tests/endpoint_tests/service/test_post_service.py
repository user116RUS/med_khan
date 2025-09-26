from uuid import uuid4

import pytest
from httpx import AsyncClient

from Medkhan.daos import AllDAOs

URI = "/api/v1/services/"


@pytest.mark.anyio
async def test_post_service(
    client: AsyncClient,
    daos: AllDAOs,
) -> None:
    """Test create Service: 201."""
    input_json = {
        "id": str(uuid4()),
        "name": "world",
    }

    response = await client.post(URI, json=input_json)
    assert response.status_code == 201

    response_data = response.json()["data"]
    db_service = await daos.service.filter_first(
        id=response_data["id"],
    )

    assert db_service is not None
    assert db_service.name == input_json["name"]
