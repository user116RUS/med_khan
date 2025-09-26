# from sqladmin.fields import FileUploadField
from sqladmin import ModelView

from Medkhan.models import Departament

from sqladmin import ModelView


class DepartamentAdmin(ModelView, model=Departament):
    column_list = [
        Departament.id,
    ]
    # form_overrides = {"photo_path": FileUploadField}
    name = "Департамент"
    name_plural = "департаменты"