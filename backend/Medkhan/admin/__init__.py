from sqladmin import Admin
from fastapi import FastAPI

from .departament import DepartamentAdmin
from .doctor import DoctorAdmin
from .checkup import CheckupAdmin
from .service import ServiceAdmin
from .speciality import SpecialityAdmin
from .contact_request import ContactAdmin


async def setup_admin(app: FastAPI):
    """
    Инициализирует и настраивает SQLAdmin.
    """
    admin = Admin(app, app.state.db_engine)
    admin.add_view(DoctorAdmin)
    admin.add_view(CheckupAdmin)
    admin.add_view(DepartamentAdmin)
    admin.add_view(ServiceAdmin)
    admin.add_view(SpecialityAdmin)
    admin.add_view(ContactAdmin)
