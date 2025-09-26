import pytest
from httpx import AsyncClient

from Medkhan.daos import AllDAOs
from tests import factories

URI = "/api/v1/checkups/{checkup_id}"


@pytest.mark.anyio
async def test_delete_checkup(
    client: AsyncClient,
    daos: AllDAOs,
) -> None:
    """Test delete Checkup: 200."""
    checkup = await factories.CheckupFactory.create()

    response = await client.delete(URI.format(checkup_id=checkup.id))
    assert response.status_code == 200

    db_checkup = await daos.checkup.filter_first(id=checkup.id)
    assert db_checkup is None
