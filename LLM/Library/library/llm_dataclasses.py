from dataclasses import dataclass
from typing import Any, Dict

from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class LLMInput:
    message: str
    intent: str


@dataclass_json
@dataclass
class LLMResult:
    message: str
    raw_result: Dict[str, Any]
