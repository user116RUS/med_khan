import pytest
from httpx import AsyncClient

from Medkhan.daos import AllDAOs
from tests import factories

URI = "/api/v1/services/{service_id}"


@pytest.mark.anyio
async def test_delete_service(
    client: AsyncClient,
    daos: AllDAOs,
) -> None:
    """Test delete Service: 200."""
    service = await factories.ServiceFactory.create()

    response = await client.delete(URI.format(service_id=service.id))
    assert response.status_code == 200

    db_service = await daos.service.filter_first(id=service.id)
    assert db_service is None
