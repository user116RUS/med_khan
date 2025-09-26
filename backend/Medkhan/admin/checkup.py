# from sqladmin.fields import FileUploadField
from sqladmin import ModelView

from Medkhan.models import Checkup

from sqladmin import ModelView


class CheckupAdmin(ModelView, model=Checkup):
    column_list = [
        Checkup.name,
        Checkup.original_price,
        Checkup.discounted_price,
        Checkup.gender,
        Checkup.checkup_type,
    ]
    # form_overrides = {"photo_path": FileUploadField}
    name = "Чекап"
    name_plural = "Чекапы"
