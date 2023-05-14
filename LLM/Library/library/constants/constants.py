from enum import Enum
from typing import Any, TypeVar, Type, cast


T = TypeVar("T")
EnumT = TypeVar("EnumT", bound=Enum)


def to_enum(c: Type[EnumT], x: Any) -> EnumT:
    assert isinstance(x, c)
    return x.value


def to_class(c: Type[T], x: Any) -> dict:
    assert isinstance(x, c)
    return cast(Any, x).to_dict()


class Status(Enum):
    COMPLETED = "completed"
    ERROR = "error"
    PENDING = "pending"
    PROCESSING = "processing"


class Constants:
    status: Status

    def __init__(self, status: Status) -> None:
        self.status = status

    @staticmethod
    def from_dict(obj: Any) -> 'Constants':
        assert isinstance(obj, dict)
        status = Status(obj.get("status"))
        return Constants(status)

    def to_dict(self) -> dict:
        result: dict = {}
        result["status"] = to_enum(Status, self.status)
        return result


def constants_from_dict(s: Any) -> Constants:
    return Constants.from_dict(s)


def constants_to_dict(x: Constants) -> Any:
    return to_class(Constants, x)
