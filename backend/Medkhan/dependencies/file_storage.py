from Medkhan.file_storage import FileStorageManager, LocalFileStorage

file_storage = LocalFileStorage()


def get_file_storage() -> FileStorageManager:
    return file_storage
