from django.db import models
import uuid


class QueryRequest(models.Model):
    query_request_rid = models.UUIDField(
        editable=False, default=uuid.uuid4, null=False, primary_key=True
    )
    status = models.TextField()
    input = models.JSONField()
    result = models.JSONField()

    class Meta:
        managed = True
        db_table = "QueryRequest"
        app_label = "query"
