import pytest
from httpx import AsyncClient

from Medkhan.daos import AllDAOs
from tests import factories

URI = "/api/v1/services/{service_id}"


@pytest.mark.anyio
async def test_patch_service(
    client: AsyncClient,
    daos: AllDAOs,
) -> None:
    """Test patch Service: 200."""
    service = await factories.ServiceFactory.create()

    input_json = {
        "name": "world",
    }

    response = await client.patch(
        URI.format(service_id=service.id), json=input_json
    )
    assert response.status_code == 200

    db_service = await daos.service.filter_first(id=service.id)

    assert db_service is not None
    assert db_service.name == input_json["name"]
