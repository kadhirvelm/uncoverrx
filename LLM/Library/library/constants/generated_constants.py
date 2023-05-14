from typing import Any, Dict, TypeVar, Callable, Type, cast
from enum import Enum


T = TypeVar("T")
EnumT = TypeVar("EnumT", bound=Enum)


def from_str(x: Any) -> str:
    assert isinstance(x, str)
    return x


def from_dict(f: Callable[[Any], T], x: Any) -> Dict[str, T]:
    assert isinstance(x, dict)
    return { k: f(v) for (k, v) in x.items() }


def to_class(c: Type[T], x: Any) -> dict:
    assert isinstance(x, c)
    return cast(Any, x).to_dict()


def to_enum(c: Type[EnumT], x: Any) -> EnumT:
    assert isinstance(x, c)
    return x.value


class LLMInput:
    intent: str
    message: str

    def __init__(self, intent: str, message: str) -> None:
        self.intent = intent
        self.message = message

    @staticmethod
    def from_dict(obj: Any) -> 'LLMInput':
        assert isinstance(obj, dict)
        intent = from_str(obj.get("intent"))
        message = from_str(obj.get("message"))
        return LLMInput(intent, message)

    def to_dict(self) -> dict:
        result: dict = {}
        result["intent"] = from_str(self.intent)
        result["message"] = from_str(self.message)
        return result


class LLMResult:
    message: str
    raw_result: Dict[str, Any]

    def __init__(self, message: str, raw_result: Dict[str, Any]) -> None:
        self.message = message
        self.raw_result = raw_result

    @staticmethod
    def from_dict(obj: Any) -> 'LLMResult':
        assert isinstance(obj, dict)
        message = from_str(obj.get("message"))
        raw_result = from_dict(lambda x: x, obj.get("raw_result"))
        return LLMResult(message, raw_result)

    def to_dict(self) -> dict:
        result: dict = {}
        result["message"] = from_str(self.message)
        result["raw_result"] = from_dict(lambda x: x, self.raw_result)
        return result


class Status(Enum):
    COMPLETED = "completed"
    ERROR = "error"
    PENDING = "pending"
    PROCESSING = "processing"


class GeneratedConstants:
    llm_input: LLMInput
    llm_result: LLMResult
    status: Status

    def __init__(self, llm_input: LLMInput, llm_result: LLMResult, status: Status) -> None:
        self.llm_input = llm_input
        self.llm_result = llm_result
        self.status = status

    @staticmethod
    def from_dict(obj: Any) -> 'GeneratedConstants':
        assert isinstance(obj, dict)
        llm_input = LLMInput.from_dict(obj.get("llm_input"))
        llm_result = LLMResult.from_dict(obj.get("llm_result"))
        status = Status(obj.get("status"))
        return GeneratedConstants(llm_input, llm_result, status)

    def to_dict(self) -> dict:
        result: dict = {}
        result["llm_input"] = to_class(LLMInput, self.llm_input)
        result["llm_result"] = to_class(LLMResult, self.llm_result)
        result["status"] = to_enum(Status, self.status)
        return result


def generated_constants_from_dict(s: Any) -> GeneratedConstants:
    return GeneratedConstants.from_dict(s)


def generated_constants_to_dict(x: GeneratedConstants) -> Any:
    return to_class(GeneratedConstants, x)
