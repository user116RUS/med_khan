from typing import Annotated

from fastapi import Depends

from Medkhan.daos.checkup_daos import CheckupDAO
from Medkhan.daos.contact_request_daos import ContactRequestDAO
from Medkhan.daos.departament_daos import DepartamentDAO
from Medkhan.daos.doctor_daos import DoctorDAO
from Medkhan.daos.service_daos import ServiceDAO
from Medkhan.daos.speciality_daos import SpecialityDAO
from Medkhan.db.db_dependencies import GetDBSession


class AllDAOs:
    """
    A centralized container for all DAOs used in the application.
    This class provides an organized way to access different DAOs as properties.

    Example:
        To add a new DAO, define a property method that returns
        an instance of the desired DAO:

        >>> @property
        >>> def user(self) -> UserDAO:
        >>>     return UserDAO(self.session)

        This allows you to access the `UserDAO` like so:

        >>> @router.post("/myroute")
        >>> async def my_route(daos: GetDAOs) -> ...:
        >>>     await daos.user.create(...)

    """

    def __init__(self, session: GetDBSession):
        self.session = session

    @property
    def doctor(self) -> DoctorDAO:
        return DoctorDAO(self.session)

    @property
    def service(self) -> ServiceDAO:
        return ServiceDAO(self.session)

    @property
    def checkup(self) -> CheckupDAO:
        return CheckupDAO(self.session)

    @property
    def contact_request(self) -> ContactRequestDAO:
        return ContactRequestDAO(self.session)

    @property
    def departament(self) -> DepartamentDAO:
        return DepartamentDAO(self.session)

    @property
    def speciality(self) -> SpecialityDAO:
        return SpecialityDAO(self.session)


GetDAOs = Annotated[AllDAOs, Depends()]
