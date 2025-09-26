from Medkhan.daos.base_daos import BaseDAO
from Medkhan.dtos.checkup_dtos import CheckupInputDTO, CheckupUpdateDTO
from Medkhan.models.checkup_models import Checkup


class CheckupDAO(
    BaseDAO[
        Checkup,
        CheckupInputDTO,
        CheckupUpdateDTO,
    ]
):
    """Checkup DAO."""
