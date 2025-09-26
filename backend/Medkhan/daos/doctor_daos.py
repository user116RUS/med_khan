from Medkhan.daos.base_daos import BaseDAO
from Medkhan.dtos.doctor_dtos import DoctorInputDTO, DoctorUpdateDTO
from Medkhan.models.doctor_models import Doctor


class DoctorDAO(
    BaseDAO[
        Doctor,
        DoctorInputDTO,
        DoctorUpdateDTO,
    ]
):
    """Doctor DAO."""
