from uuid import UUID, uuid4

import sqlalchemy as sa
from sqlalchemy.orm import Mapped, mapped_column

from Medkhan.db import Base


class Departament(Base):
    """Departament model."""

    __tablename__ = "departament"

    id: Mapped[int] = mapped_column(
        sa.Integer, primary_key=True, autoincrement=True, index=True
    )
