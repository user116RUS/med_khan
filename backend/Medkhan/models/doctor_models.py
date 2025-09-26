import sqlalchemy as sa
from sqlalchemy.orm import Mapped, mapped_column
from sqlalchemy.sql import func

from Medkhan.db import Base


class Doctor(Base):
    """Doctor model."""

    __tablename__ = "doctor"

    id: Mapped[int] = mapped_column(
        sa.Integer, primary_key=True, autoincrement=True, index=True
    )

    created_at = sa.Column(
        sa.DateTime(timezone=True), server_default=func.now()
    )
    updated_at = sa.Column(sa.DateTime(timezone=True), onupdate=func.now())

    full_name: Mapped[str] = mapped_column(sa.String(256))
    experience_years: Mapped[int] = mapped_column(sa.Integer)
    consultation_cost: Mapped[int | None] = mapped_column(sa.Integer)
    category: Mapped[str] = mapped_column(sa.String(50))
    profile_treatment: Mapped[str] = mapped_column(sa.Text)
    work_experience: Mapped[str] = mapped_column(sa.Text)
    education: Mapped[str] = mapped_column(sa.Text)

    image_url: Mapped[str | None] = mapped_column(sa.String(2048))

    online_booking_link: Mapped[str | None] = mapped_column(sa.String(2048))
