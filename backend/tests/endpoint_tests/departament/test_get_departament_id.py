import pytest
from httpx import AsyncClient

from tests import factories

URI = "/api/v1/departaments/{departament_id}"


@pytest.mark.anyio
async def test_get_departament_by_id(
    client: AsyncClient,
) -> None:
    """Test get departament by id: 200."""
    departament = await factories.DepartamentFactory.create()

    response = await client.get(URI.format(departament_id=departament.id))
    assert response.status_code == 200

    response_data = response.json()["data"]
    assert response_data["id"] == str(departament.id)
