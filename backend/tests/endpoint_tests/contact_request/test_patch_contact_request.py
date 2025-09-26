import pytest
from httpx import AsyncClient

from Medkhan.daos import AllDAOs
from tests import factories

URI = "/api/v1/contact-requests/{contact_request_id}"


@pytest.mark.anyio
async def test_patch_contact_request(
    client: AsyncClient,
    daos: AllDAOs,
) -> None:
    """Test patch ContactRequest: 200."""
    contact_request = await factories.ContactRequestFactory.create()

    input_json = {}

    response = await client.patch(
        URI.format(contact_request_id=contact_request.id), json=input_json
    )
    assert response.status_code == 200

    db_contact_request = await daos.contact_request.filter_first(
        id=contact_request.id
    )

    assert db_contact_request is not None
