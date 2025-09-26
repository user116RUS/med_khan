from uuid import UUID

import pytest
from httpx import AsyncClient

from tests import factories

URI = "/api/v1/contact-requests/"


@pytest.mark.anyio
async def test_get_contact_requests(
    client: AsyncClient,
) -> None:
    """Test get ContactRequest: 200."""
    contact_requests = await factories.ContactRequestFactory.create_batch(3)

    response = await client.get(URI)
    assert response.status_code == 200

    response_data = response.json()["data"]
    assert len(response_data) == 3

    for contact_request, data in zip(
        contact_requests, response_data, strict=True
    ):
        assert contact_request.id == UUID(data["id"])
