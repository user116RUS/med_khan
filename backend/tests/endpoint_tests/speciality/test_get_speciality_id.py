import pytest
from httpx import AsyncClient

from tests import factories

URI = "/api/v1/specialities/{speciality_id}"


@pytest.mark.anyio
async def test_get_speciality_by_id(
    client: AsyncClient,
) -> None:
    """Test get speciality by id: 200."""
    speciality = await factories.SpecialityFactory.create()

    response = await client.get(URI.format(speciality_id=speciality.id))
    assert response.status_code == 200

    response_data = response.json()["data"]
    assert response_data["id"] == str(speciality.id)
