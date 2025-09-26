import pytest
from httpx import AsyncClient

from tests import factories

URI = "/api/v1/checkups/{checkup_id}"


@pytest.mark.anyio
async def test_get_checkup_by_id(
    client: AsyncClient,
) -> None:
    """Test get checkup by id: 200."""
    checkup = await factories.CheckupFactory.create()

    response = await client.get(URI.format(checkup_id=checkup.id))
    assert response.status_code == 200

    response_data = response.json()["data"]
    assert response_data["id"] == str(checkup.id)
