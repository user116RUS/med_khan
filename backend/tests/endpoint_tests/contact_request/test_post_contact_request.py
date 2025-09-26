from uuid import uuid4

import pytest
from httpx import AsyncClient

from Medkhan.daos import AllDAOs

URI = "/api/v1/contact-requests/"


@pytest.mark.anyio
async def test_post_contact_request(
    client: AsyncClient,
    daos: AllDAOs,
) -> None:
    """Test create ContactRequest: 201."""
    input_json = {
        "id": str(uuid4()),
    }

    response = await client.post(URI, json=input_json)
    assert response.status_code == 201

    response_data = response.json()["data"]
    db_contact_request = await daos.contact_request.filter_first(
        id=response_data["id"],
    )

    assert db_contact_request is not None
