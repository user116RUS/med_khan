from uuid import UUID

import pytest
from httpx import AsyncClient

from tests import factories

URI = "/api/v1/services/"


@pytest.mark.anyio
async def test_get_services(
    client: AsyncClient,
) -> None:
    """Test get Service: 200."""
    services = await factories.ServiceFactory.create_batch(3)

    response = await client.get(URI)
    assert response.status_code == 200

    response_data = response.json()["data"]
    assert len(response_data) == 3

    for service, data in zip(services, response_data, strict=True):
        assert service.id == UUID(data["id"])
