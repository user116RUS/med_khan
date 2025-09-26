import pytest
from httpx import AsyncClient

from tests import factories

URI = "/api/v1/doctors/{doctor_id}"


@pytest.mark.anyio
async def test_get_doctor_by_id(
    client: AsyncClient,
) -> None:
    """Test get doctor by id: 200."""
    doctor = await factories.DoctorFactory.create()

    response = await client.get(URI.format(doctor_id=doctor.id))
    assert response.status_code == 200

    response_data = response.json()["data"]
    assert response_data["id"] == str(doctor.id)
    assert response_data["full_name"] == doctor.full_name
    assert response_data["experience_years"] == doctor.experience_years
    assert response_data["consultation_cost"] == doctor.consultation_cost
    assert response_data["category"] == doctor.category
    assert response_data["profile_treatment"] == doctor.profile_treatment
    assert response_data["work_experience"] == doctor.work_experience
    assert response_data["education"] == doctor.education
    assert response_data["image_url"] == doctor.image_url
    assert response_data["online_booking_link"] == doctor.online_booking_link
