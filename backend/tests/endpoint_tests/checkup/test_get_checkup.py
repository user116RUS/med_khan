from uuid import UUID

import pytest
from httpx import AsyncClient

from tests import factories

URI = "/api/v1/checkups/"


@pytest.mark.anyio
async def test_get_checkups(
    client: AsyncClient,
) -> None:
    """Test get Checkup: 200."""
    checkups = await factories.CheckupFactory.create_batch(3)

    response = await client.get(URI)
    assert response.status_code == 200

    response_data = response.json()["data"]
    assert len(response_data) == 3

    for checkup, data in zip(checkups, response_data, strict=True):
        assert checkup.id == UUID(data["id"])
