import pytest
from httpx import AsyncClient

from Medkhan.daos import AllDAOs
from tests import factories

URI = "/api/v1/checkups/{checkup_id}"


@pytest.mark.anyio
async def test_patch_checkup(
    client: AsyncClient,
    daos: AllDAOs,
) -> None:
    """Test patch Checkup: 200."""
    checkup = await factories.CheckupFactory.create()

    input_json = {}

    response = await client.patch(
        URI.format(checkup_id=checkup.id), json=input_json
    )
    assert response.status_code == 200

    db_checkup = await daos.checkup.filter_first(id=checkup.id)

    assert db_checkup is not None
