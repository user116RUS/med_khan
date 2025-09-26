from Medkhan.settings import settings

if __name__ == "__main__":
    import uvicorn

    uvicorn.run(
        "Medkhan.main:get_app",
        #host=settings.host,
        #port=settings.port,
        host='localhost',
        port=8009,
        log_level=settings.log_level,
        reload=settings.reload,
        lifespan="on",
        factory=True,
    )
