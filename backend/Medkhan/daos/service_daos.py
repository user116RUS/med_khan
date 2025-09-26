from Medkhan.daos.base_daos import BaseDAO
from Medkhan.dtos.service_dtos import ServiceInputDTO, ServiceUpdateDTO
from Medkhan.models.service_models import Service


class ServiceDAO(
    BaseDAO[
        Service,
        ServiceInputDTO,
        ServiceUpdateDTO,
    ]
):
    """Service DAO."""
