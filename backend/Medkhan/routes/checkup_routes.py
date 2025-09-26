from uuid import UUID

from fastapi import APIRouter

from Medkhan.daos import GetDAOs
from Medkhan.dtos import (
    DataResponse,
    OffsetResults,
    Pagination,
)
from Medkhan.dtos.checkup_dtos import (
    CheckupDTO,
)

router = APIRouter(prefix="/checkups")


@router.get("/")
async def get_checkup_paginated(
    daos: GetDAOs,
    pagination: Pagination,
) -> OffsetResults[CheckupDTO]:
    """Get all Checkups paginated."""
    return await daos.checkup.get_offset_results(
        out_dto=CheckupDTO,
        pagination=pagination,
    )


@router.get("/{checkup_id}")
async def get_checkup(
    checkup_id: UUID,
    daos: GetDAOs,
) -> DataResponse[CheckupDTO]:
    """Get a Checkup by id."""
    checkup = await daos.checkup.filter_first(id=checkup_id)
    return DataResponse(data=CheckupDTO.model_validate(checkup))
