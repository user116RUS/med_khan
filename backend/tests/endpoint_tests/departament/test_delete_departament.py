import pytest
from httpx import AsyncClient

from Medkhan.daos import AllDAOs
from tests import factories

URI = "/api/v1/departaments/{departament_id}"


@pytest.mark.anyio
async def test_delete_departament(
    client: AsyncClient,
    daos: AllDAOs,
) -> None:
    """Test delete Departament: 200."""
    departament = await factories.DepartamentFactory.create()

    response = await client.delete(URI.format(departament_id=departament.id))
    assert response.status_code == 200

    db_departament = await daos.departament.filter_first(id=departament.id)
    assert db_departament is None
