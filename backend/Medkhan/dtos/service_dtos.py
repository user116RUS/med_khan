from uuid import UUID

from pydantic import BaseModel

from Medkhan.dtos import BaseOrmModel


class ServiceDTO(BaseOrmModel):
    """Service DTO."""

    id: int
    name: str


class ServiceInputDTO(BaseModel):
    """Service input DTO."""


class ServiceUpdateDTO(BaseModel):
    """Service update DTO."""
