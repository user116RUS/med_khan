import pytest
from httpx import AsyncClient

from Medkhan.daos import AllDAOs
from tests import factories

URI = "/api/v1/contact-requests/{contact_request_id}"


@pytest.mark.anyio
async def test_delete_contact_request(
    client: AsyncClient,
    daos: AllDAOs,
) -> None:
    """Test delete ContactRequest: 200."""
    contact_request = await factories.ContactRequestFactory.create()

    response = await client.delete(
        URI.format(contact_request_id=contact_request.id)
    )
    assert response.status_code == 200

    db_contact_request = await daos.contact_request.filter_first(
        id=contact_request.id
    )
    assert db_contact_request is None
