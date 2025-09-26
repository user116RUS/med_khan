import pytest
from httpx import AsyncClient

from Medkhan.daos import AllDAOs
from tests import factories

URI = "/api/v1/departaments/{departament_id}"


@pytest.mark.anyio
async def test_patch_departament(
    client: AsyncClient,
    daos: AllDAOs,
) -> None:
    """Test patch Departament: 200."""
    departament = await factories.DepartamentFactory.create()

    input_json = {}

    response = await client.patch(
        URI.format(departament_id=departament.id), json=input_json
    )
    assert response.status_code == 200

    db_departament = await daos.departament.filter_first(id=departament.id)

    assert db_departament is not None
