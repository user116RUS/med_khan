from uuid import UUID

from fastapi import APIRouter

from Medkhan.daos import GetDAOs
from Medkhan.dtos import (
    DataResponse,
    OffsetResults,
    Pagination,
)
from Medkhan.dtos.doctor_dtos import (
    DoctorDTO,
)

router = APIRouter(prefix="/doctors")


@router.get("/")
async def get_doctor_paginated(
    daos: GetDAOs,
    pagination: Pagination,
) -> OffsetResults[DoctorDTO]:
    """Get all Doctors paginated."""
    return await daos.doctor.get_offset_results(
        out_dto=DoctorDTO,
        pagination=pagination,
    )


@router.get("/{doctor_id}")
async def get_doctor(
    doctor_id: UUID,
    daos: GetDAOs,
) -> DataResponse[DoctorDTO]:
    """Get a Doctor by id."""
    doctor = await daos.doctor.filter_first(id=doctor_id)
    return DataResponse(data=DoctorDTO.model_validate(doctor))
