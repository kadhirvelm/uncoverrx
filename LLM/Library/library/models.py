import uuid
from enum import Enum

from django.db import models


class RequestStatus(str, Enum):
    PENDING = "pending"
    PROCESSING = "processing"
    COMPLETED = "completed"
    ERROR = "error"


class QueryRequest(models.Model):
    query_request_rid = models.UUIDField(
        editable=False, default=uuid.uuid4, null=False, primary_key=True
    )
    status = models.TextField()
    input = models.JSONField()
    result = models.JSONField(null=True)

    class Meta:
        managed = True
        db_table = "QueryRequest"
        app_label = "query"
