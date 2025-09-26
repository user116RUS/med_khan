import pytest
from httpx import AsyncClient

from Medkhan.daos import AllDAOs
from tests import factories

URI = "/api/v1/specialities/{speciality_id}"


@pytest.mark.anyio
async def test_patch_speciality(
    client: AsyncClient,
    daos: AllDAOs,
) -> None:
    """Test patch Speciality: 200."""
    speciality = await factories.SpecialityFactory.create()

    input_json = {}

    response = await client.patch(
        URI.format(speciality_id=speciality.id), json=input_json
    )
    assert response.status_code == 200

    db_speciality = await daos.speciality.filter_first(id=speciality.id)

    assert db_speciality is not None
