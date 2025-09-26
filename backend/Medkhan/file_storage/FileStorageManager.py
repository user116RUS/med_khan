from abc import ABC, abstractmethod
from fastapi import UploadFile


class FileStorageManager(ABC):
    """Абстрактный интерфейс для управления хранилищем файлов."""

    @abstractmethod
    async def upload_file(self, file: UploadFile) -> str:
        """Сохраняет файл и возвращает его уникальный путь или URL."""
        pass

    @abstractmethod
    def get_file_url(self, file_path: str) -> str:
        """Возвращает публичный URL для доступа к файлу."""
        pass

    @abstractmethod
    async def delete_file(self, file_path: str) -> None:
        """Удаляет файл из хранилища."""
        pass
