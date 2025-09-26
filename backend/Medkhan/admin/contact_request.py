# from sqladmin.fields import FileUploadField
from sqladmin import ModelView

from Medkhan.models.contact_request_models import ContactRequest

from sqladmin import ModelView


class ContactAdmin(ModelView, model=ContactRequest):
    column_list = [
        ContactRequest.id
    ]
    # form_overrides = {"photo_path": FileUploadField}
    name = "contact req"
    name_plural = "contsct req"
    icon = "fa-solid fa-user-doctor"
