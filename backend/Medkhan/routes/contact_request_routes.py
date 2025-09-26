from uuid import UUID

from fastapi import APIRouter

from Medkhan.daos import GetDAOs
from Medkhan.dtos import (
    DataResponse,
    OffsetResults,
    Pagination,
)
from Medkhan.dtos.contact_request_dtos import (
    ContactRequestDTO,
    ContactRequestInputDTO,
)

router = APIRouter(prefix="/contact-requests")


@router.post("/", status_code=201)
async def create_contact_request(
    input_dto: ContactRequestInputDTO,
    daos: GetDAOs,
) -> DataResponse[ContactRequestDTO]:
    """Create a new ContactRequest."""
    created_obj = await daos.contact_request.create(input_dto)
    return DataResponse(data=ContactRequestDTO.model_validate(created_obj))


@router.get("/")
async def get_contact_request_paginated(
    daos: GetDAOs,
    pagination: Pagination,
) -> OffsetResults[ContactRequestDTO]:
    """Get all ContactRequests paginated."""
    return await daos.contact_request.get_offset_results(
        out_dto=ContactRequestDTO,
        pagination=pagination,
    )


@router.get("/{contact_request_id}")
async def get_contact_request(
    contact_request_id: UUID,
    daos: GetDAOs,
) -> DataResponse[ContactRequestDTO]:
    """Get a ContactRequest by id."""
    contact_request = await daos.contact_request.filter_first(
        id=contact_request_id
    )
    return DataResponse(data=ContactRequestDTO.model_validate(contact_request))
