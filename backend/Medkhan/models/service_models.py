from uuid import UUID, uuid4

import sqlalchemy as sa
from sqlalchemy.orm import Mapped, mapped_column

from Medkhan.db import Base


class Service(Base):
    """Service model."""

    __tablename__ = "service"

    id: Mapped[int] = mapped_column(
        sa.Integer, primary_key=True, autoincrement=True, index=True
    )
    name: Mapped[str] = mapped_column(sa.String(256))
