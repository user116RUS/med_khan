from Medkhan.daos.base_daos import BaseDAO
from Medkhan.dtos.speciality_dtos import (
    SpecialityInputDTO,
    SpecialityUpdateDTO,
)
from Medkhan.models.speciality_models import Speciality


class SpecialityDAO(
    BaseDAO[
        Speciality,
        SpecialityInputDTO,
        SpecialityUpdateDTO,
    ]
):
    """Speciality DAO."""
