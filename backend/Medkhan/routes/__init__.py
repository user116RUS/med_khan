from fastapi import APIRouter

from Medkhan.routes.checkup_routes import router as checkup_router
from Medkhan.routes.contact_request_routes import (
    router as contact_request_router,
)
from Medkhan.routes.demo_routes import router as demo_router
from Medkhan.routes.doctor_routes import router as doctor_router
from Medkhan.routes.health_routes import router as health_router

base_router = APIRouter(prefix="/api/v1")

base_router.include_router(health_router, tags=["health"])
base_router.include_router(demo_router, tags=["demo"])
base_router.include_router(doctor_router, tags=["doctor"])
base_router.include_router(checkup_router, tags=["checkup"])
base_router.include_router(contact_request_router, tags=["contact_request"])
