from uuid import UUID

from pydantic import BaseModel

from Medkhan.dtos import BaseOrmModel


class SpecialityDTO(BaseOrmModel):
    """Speciality DTO."""

    id: int


class SpecialityInputDTO(BaseModel):
    """Speciality input DTO."""


class SpecialityUpdateDTO(BaseModel):
    """Speciality update DTO."""
