# from sqladmin.fields import FileUploadField
from sqladmin import ModelView

from Medkhan.models.doctor_models import Doctor

from sqladmin import ModelView


class DoctorAdmin(ModelView, model=Doctor):
    column_list = [
        Doctor.full_name,
        Doctor.experience_years,
        Doctor.category,
        Doctor.profile_treatment,
    ]
    # form_overrides = {"photo_path": FileUploadField}
    name = "Доктор"
    name_plural = "Доктора"
    icon = "fa-solid fa-user-doctor"
