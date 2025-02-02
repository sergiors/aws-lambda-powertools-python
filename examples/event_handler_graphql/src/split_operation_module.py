from typing import TypedDict

from aws_lambda_powertools import Logger, Tracer
from aws_lambda_powertools.event_handler.appsync import Router

tracer = Tracer()
logger = Logger()
router = Router()


class Location(TypedDict, total=False):
    id: str  # noqa AA03 VNE003, required due to GraphQL Schema
    name: str
    description: str
    address: str


@router.resolver(field_name="listLocations")
@router.resolver(field_name="locations")
@tracer.capture_method
def get_locations(name: str, description: str = "") -> list[Location]:  # match GraphQL Query arguments
    return [{"name": name, "description": description}]
