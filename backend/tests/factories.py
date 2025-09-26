import asyncio
import inspect
from typing import Any

import factory
from sqlalchemy.ext.asyncio import (
    AsyncSession,
)

from Medkhan.db import Base
from Medkhan.models.checkup_models import Checkup
from Medkhan.models.contact_request_models import ContactRequest
from Medkhan.models.departament_models import Departament
from Medkhan.models.doctor_models import Doctor
from Medkhan.models.service_models import Service
from Medkhan.models.speciality_models import Speciality


class BaseFactory[Model: Base](factory.Factory):
    """
    This is the base factory class for all factories.

    Inherit from this class to create a new factory that provides a way to create
    new instances of a specific model, used for testing purposes.

    Example:
    >>> class UserFactory(BaseFactory[User]):
    >>>     ...
    >>>     class Meta:
    >>>         model = User

    """

    session: AsyncSession

    class Meta:
        abstract = True

    @classmethod
    async def create(cls, *args: Any, **kwargs: Any) -> Model:
        """Create and commit a new instance of the model."""
        instance = await super().create(*args, **kwargs)
        await cls.session.commit()
        return instance

    @classmethod
    async def create_batch(
        cls, size: int, *args: Any, **kwargs: Any
    ) -> list[Model]:
        """Create a batch of new instances of the model."""
        return [await cls.create(*args, **kwargs) for _ in range(size)]

    @classmethod
    def _create(
        cls,
        model_class: type["BaseFactory[Model]"],
        *args: Any,
        **kwargs: Any,
    ) -> asyncio.Task["BaseFactory[Model]"]:
        async def maker_coroutine() -> "BaseFactory[Model]":
            for key, value in kwargs.items():
                if inspect.isawaitable(value):
                    kwargs[key] = await value
            return await cls._create_model(model_class, *args, **kwargs)

        return asyncio.create_task(maker_coroutine())

    @classmethod
    async def _create_model(
        cls,
        model_class: type["BaseFactory[Model]"],
        *args: Any,
        **kwargs: Any,
    ) -> "BaseFactory[Model]":
        """Create a new instance of the model."""
        model = model_class(*args, **kwargs)
        cls.session.add(model)
        return model


###################
# Factory classes #
###################


class DoctorFactory(BaseFactory[Doctor]):
    """doctor factory."""

    class Meta:
        model = Doctor

    full_name = factory.Faker("text")
    experience_years = factory.Faker("random_int")
    consultation_cost = factory.Faker("random_int")
    category = factory.Faker("text")
    profile_treatment = factory.Faker("text")
    work_experience = factory.Faker("text")
    education = factory.Faker("text")
    image_url = factory.Faker("text")
    online_booking_link = factory.Faker("text")


class ServiceFactory(BaseFactory[Service]):
    """service factory."""

    class Meta:
        model = Service

    name = factory.Faker("text")


class CheckupFactory(BaseFactory[Checkup]):
    """checkup factory."""

    class Meta:
        model = Checkup


class ContactRequestFactory(BaseFactory[ContactRequest]):
    """contact_request factory."""

    class Meta:
        model = ContactRequest


class DepartamentFactory(BaseFactory[Departament]):
    """departament factory."""

    class Meta:
        model = Departament


class SpecialityFactory(BaseFactory[Speciality]):
    """speciality factory."""

    class Meta:
        model = Speciality
