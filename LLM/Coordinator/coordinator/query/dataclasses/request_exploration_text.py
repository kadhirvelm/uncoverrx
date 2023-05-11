from dataclasses import dataclass

from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ResolveQueryRequest:
    query_request_rid: str
