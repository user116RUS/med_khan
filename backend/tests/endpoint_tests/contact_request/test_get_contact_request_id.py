import pytest
from httpx import AsyncClient

from tests import factories

URI = "/api/v1/contact-requests/{contact_request_id}"


@pytest.mark.anyio
async def test_get_contact_request_by_id(
    client: AsyncClient,
) -> None:
    """Test get contact_request by id: 200."""
    contact_request = await factories.ContactRequestFactory.create()

    response = await client.get(
        URI.format(contact_request_id=contact_request.id)
    )
    assert response.status_code == 200

    response_data = response.json()["data"]
    assert response_data["id"] == str(contact_request.id)
