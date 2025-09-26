from uuid import UUID

from pydantic import BaseModel

from Medkhan.dtos import BaseOrmModel


class ContactRequestDTO(BaseOrmModel):
    """ContactRequest DTO."""

    id: int


class ContactRequestInputDTO(BaseModel):
    """ContactRequest input DTO."""


class ContactRequestUpdateDTO(BaseModel):
    """ContactRequest update DTO."""
