from fastapi_storages import FileSystemStorage
from pathlib import Path

BASE_STORAGE_PATH = Path("../local_storage/")
BASE_STORAGE_PATH.mkdir(parents=True, exist_ok=True)

file_storage = FileSystemStorage(path=BASE_STORAGE_PATH)
