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

    previous_query_requests = models.QueryRequest.objects.filter(
        query_request_rid__in=previous_cross_entries.values("query_request_rid")
    )
    previous_query_requests_indexed = {
        previous_query_requests[index].query_request_rid: previous_query_requests[index]
        for index in range(0, len(previous_query_requests))
    }

    return [
        previous_query_requests_indexed[cross_entry.query_request_rid]
        for cross_entry in previous_cross_entries.order_by("position")
    ]
