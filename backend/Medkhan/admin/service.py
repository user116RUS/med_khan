# from sqladmin.fields import FileUploadField
from sqladmin import ModelView

from Medkhan.models.service_models import Service

from sqladmin import ModelView


class ServiceAdmin(ModelView, model=Service):
    column_list = [
        Service.id
    ]
    # form_overrides = {"photo_path": FileUploadField}
    name = "услуга"
    name_plural = "услуги"
    icon = "fa-solid fa-user-doctor"
