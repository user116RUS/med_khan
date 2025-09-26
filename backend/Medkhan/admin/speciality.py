# from sqladmin.fields import FileUploadField
from sqladmin import ModelView

from Medkhan.models.speciality_models import Speciality

from sqladmin import ModelView


class SpecialityAdmin(ModelView, model=Speciality):
    column_list = [
        Speciality.id
    ]
    # form_overrides = {"photo_path": FileUploadField}
    name = "специалист"
    name_plural = "специалисты"
    icon = "fa-solid fa-user-doctor"
