from uuid import UUID

import pytest
from httpx import AsyncClient

from tests import factories

URI = "/api/v1/specialities/"


@pytest.mark.anyio
async def test_get_specialities(
    client: AsyncClient,
) -> None:
    """Test get Speciality: 200."""
    specialities = await factories.SpecialityFactory.create_batch(3)

    response = await client.get(URI)
    assert response.status_code == 200

    response_data = response.json()["data"]
    assert len(response_data) == 3

    for speciality, data in zip(specialities, response_data, strict=True):
        assert speciality.id == UUID(data["id"])
