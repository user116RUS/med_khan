from uuid import UUID, uuid4

import sqlalchemy as sa
from sqlalchemy.orm import Mapped, mapped_column

from Medkhan.db import Base


class Speciality(Base):
    """Speciality model."""

    __tablename__ = "speciality"

    id: Mapped[int] = mapped_column(
        sa.Integer, primary_key=True, autoincrement=True, index=True
    )
