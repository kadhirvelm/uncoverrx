from typing import List

from django.db.models import QuerySet
from library import models


def get_all_previous_query_requests(
    query_request_rid: str,
) -> List[models.QueryRequest]:
    cross_entry = models.ExplorationXQueryRequest.objects.filter(
        query_request_rid=query_request_rid
    ).first()
    if cross_entry is None:
        return []

    all_cross_entries = models.ExplorationXQueryRequest.objects.filter(
        exploration_rid=cross_entry.exploration_rid
    )

    this_request_cross_entry = all_cross_entries.filter(
        query_request_rid=query_request_rid
    ).first()
    previous_cross_entries: QuerySet[
        models.ExplorationXQueryRequest
    ] = all_cross_entries.filter(position__lte=this_request_cross_entry.position)

    return [
        cross_entry.query_request_rid
        for cross_entry in previous_cross_entries.order_by("position")
    ]
