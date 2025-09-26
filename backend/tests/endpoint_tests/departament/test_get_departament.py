from uuid import UUID

import pytest
from httpx import AsyncClient

from tests import factories

URI = "/api/v1/departaments/"


@pytest.mark.anyio
async def test_get_departaments(
    client: AsyncClient,
) -> None:
    """Test get Departament: 200."""
    departaments = await factories.DepartamentFactory.create_batch(3)

    response = await client.get(URI)
    assert response.status_code == 200

    response_data = response.json()["data"]
    assert len(response_data) == 3

    for departament, data in zip(departaments, response_data, strict=True):
        assert departament.id == UUID(data["id"])
