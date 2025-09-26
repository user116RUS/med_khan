from enum import StrEnum


class GenderEnum(StrEnum):
    male = "male"
    female = "female"
    child = "child"
    general = "general"


class CheckupType(StrEnum):
    first = "FIRST"
    secondary = "SECONDARY"
    third = "THIRD"
