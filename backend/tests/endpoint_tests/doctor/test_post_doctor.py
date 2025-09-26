from uuid import uuid4

import pytest
from httpx import AsyncClient

from Medkhan.daos import AllDAOs

URI = "/api/v1/doctors/"


@pytest.mark.anyio
async def test_post_doctor(
    client: AsyncClient,
    daos: AllDAOs,
) -> None:
    """Test create Doctor: 201."""
    input_json = {
        "id": str(uuid4()),
        "full_name": "world",
        "experience_years": 2,
        "consultation_cost": 2,
        "category": "world",
        "profile_treatment": "world",
        "work_experience": "world",
        "education": "world",
        "image_url": "world",
        "online_booking_link": "world",
    }

    response = await client.post(URI, json=input_json)
    assert response.status_code == 201

    response_data = response.json()["data"]
    db_doctor = await daos.doctor.filter_first(
        id=response_data["id"],
    )

    assert db_doctor is not None
    assert db_doctor.full_name == input_json["full_name"]
    assert db_doctor.experience_years == input_json["experience_years"]
    assert db_doctor.consultation_cost == input_json["consultation_cost"]
    assert db_doctor.category == input_json["category"]
    assert db_doctor.profile_treatment == input_json["profile_treatment"]
    assert db_doctor.work_experience == input_json["work_experience"]
    assert db_doctor.education == input_json["education"]
    assert db_doctor.image_url == input_json["image_url"]
    assert db_doctor.online_booking_link == input_json["online_booking_link"]
