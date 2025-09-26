from uuid import UUID

import pytest
from httpx import AsyncClient

from tests import factories

URI = "/api/v1/doctors/"


@pytest.mark.anyio
async def test_get_doctors(
    client: AsyncClient,
) -> None:
    """Test get Doctor: 200."""
    doctors = await factories.DoctorFactory.create_batch(3)

    response = await client.get(URI)
    assert response.status_code == 200

    response_data = response.json()["data"]
    assert len(response_data) == 3

    for doctor, data in zip(doctors, response_data, strict=True):
        assert doctor.id == UUID(data["id"])
