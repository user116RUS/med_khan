import pytest
from httpx import AsyncClient

from Medkhan.daos import AllDAOs
from tests import factories

URI = "/api/v1/specialities/{speciality_id}"


@pytest.mark.anyio
async def test_delete_speciality(
    client: AsyncClient,
    daos: AllDAOs,
) -> None:
    """Test delete Speciality: 200."""
    speciality = await factories.SpecialityFactory.create()

    response = await client.delete(URI.format(speciality_id=speciality.id))
    assert response.status_code == 200

    db_speciality = await daos.speciality.filter_first(id=speciality.id)
    assert db_speciality is None
