import pytest
from httpx import AsyncClient

from Medkhan.daos import AllDAOs
from tests import factories

URI = "/api/v1/doctors/{doctor_id}"


@pytest.mark.anyio
async def test_delete_doctor(
    client: AsyncClient,
    daos: AllDAOs,
) -> None:
    """Test delete Doctor: 200."""
    doctor = await factories.DoctorFactory.create()

    response = await client.delete(URI.format(doctor_id=doctor.id))
    assert response.status_code == 200

    db_doctor = await daos.doctor.filter_first(id=doctor.id)
    assert db_doctor is None
