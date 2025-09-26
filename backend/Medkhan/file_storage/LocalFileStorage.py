import os
import shutil
import uuid
from fastapi import UploadFile
from Medkhan.file_storage.FileStorageManager import (
    FileStorageManager,
)  # Замените на ваш путь


class LocalFileStorageManager(FileStorageManager):
    def __init__(self, upload_dir: str = "./local_storage"):
        self.upload_dir = upload_dir
        os.makedirs(self.upload_dir, exist_ok=True)

    async def upload_file(self, file: UploadFile) -> str:
        file_extension = file.filename.split(".")[-1]
        unique_filename = f"{uuid.uuid4()}.{file_extension}"
        file_path = os.path.join(self.upload_dir, unique_filename)

        with open(file_path, "wb") as f:
            shutil.copyfileobj(file.file, f)

        return file_path

    def get_file_url(self, file_path: str) -> str:
        return f"/local_storage/{os.path.basename(file_path)}"

    async def delete_file(self, file_path: str) -> None:
        if os.path.exists(file_path):
            os.remove(file_path)
