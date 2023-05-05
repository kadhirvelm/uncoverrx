from django.db import models


class QueryRequest(models.Model):
    query_request_rid = models.UUIDField(null=False, primary_key=True)
    status = models.TextField()
    input = models.JSONField()
    result = models.JSONField()

    class Meta:
        db_table = "QueryRequest"
