from Medkhan.daos.base_daos import BaseDAO
from Medkhan.dtos.departament_dtos import (
    DepartamentInputDTO,
    DepartamentUpdateDTO,
)
from Medkhan.models.departament_models import Departament


class DepartamentDAO(
    BaseDAO[
        Departament,
        DepartamentInputDTO,
        DepartamentUpdateDTO,
    ]
):
    """Departament DAO."""
