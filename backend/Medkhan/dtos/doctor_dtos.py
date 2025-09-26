from uuid import UUID

from pydantic import BaseModel

from Medkhan.dtos import BaseOrmModel


class DoctorDTO(BaseOrmModel):
    """Doctor DTO."""

    id: int
    full_name: str
    experience_years: int
    consultation_cost: int | None
    category: str
    profile_treatment: str
    work_experience: str
    education: str
    image_url: str | None
    online_booking_link: str | None


class DoctorInputDTO(BaseModel):
    """Doctor input DTO."""


class DoctorUpdateDTO(BaseModel):
    """Doctor update DTO."""
