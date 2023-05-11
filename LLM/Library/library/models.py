import uuid
from enum import Enum

from django.db import models


class RequestStatus(str, Enum):
    PENDING = "pending"
    PROCESSING = "processing"
    COMPLETED = "completed"
    ERROR = "error"


class Exploration(models.Model):
    exploration_rid = models.UUIDField(
        editable=False, default=uuid.uuid4, null=False, primary_key=True
    )
    metadata = models.JSONField()

    class Meta:
        managed = True
        db_table = "Exploration"
        app_label = "query"


class QueryRequest(models.Model):
    query_request_rid = models.UUIDField(
        editable=False, default=uuid.uuid4, null=False, primary_key=True
    )
    status = models.TextField()
    input = models.JSONField()
    request_date = models.DateTimeField()
    completion_date = models.DateTimeField()
    result = models.JSONField(null=True)

    class Meta:
        managed = True
        db_table = "QueryRequest"
        app_label = "query"


class ExplorationXQueryRequest(models.Model):
    exploration_x_query_request_id = models.AutoField(primary_key=True)
    exploration_rid = models.ForeignKey(Exploration, on_delete=models.DO_NOTHING)
    query_request_rid = models.ForeignKey(QueryRequest, on_delete=models.DO_NOTHING)
    position = models.TextField()

    class Meta:
        managed = True
        db_table = "ExplorationXQueryRequest"
        app_label = "query"
        indexes = [
            models.Index(fields=["exploration_rid"]),
            models.Index(fields=["query_request_rid"]),
        ]
