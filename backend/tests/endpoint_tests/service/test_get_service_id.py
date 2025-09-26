import pytest
from httpx import AsyncClient

from tests import factories

URI = "/api/v1/services/{service_id}"


@pytest.mark.anyio
async def test_get_service_by_id(
    client: AsyncClient,
) -> None:
    """Test get service by id: 200."""
    service = await factories.ServiceFactory.create()

    response = await client.get(URI.format(service_id=service.id))
    assert response.status_code == 200

    response_data = response.json()["data"]
    assert response_data["id"] == str(service.id)
    assert response_data["name"] == service.name
