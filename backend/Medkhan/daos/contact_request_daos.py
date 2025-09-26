from Medkhan.daos.base_daos import BaseDAO
from Medkhan.dtos.contact_request_dtos import (
    ContactRequestInputDTO,
    ContactRequestUpdateDTO,
)
from Medkhan.models.contact_request_models import ContactRequest


class ContactRequestDAO(
    BaseDAO[
        ContactRequest,
        ContactRequestInputDTO,
        ContactRequestUpdateDTO,
    ]
):
    """ContactRequest DAO."""
