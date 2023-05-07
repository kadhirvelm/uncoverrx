import json
import logging
import uuid
from datetime import datetime

from coordinator.query.dataclasses.request_exploration_text import (
    RequestExplorationText,
)
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
from library import instantiate_celery, models

celery_app = instantiate_celery.instantiate_celery("coordinator_project")


def index():
    return JsonResponse({"version": "1.0.0"})


@require_http_methods(["POST"])
def request_exploration_text(request):
    exploration_text: RequestExplorationText = RequestExplorationText.schema().loads(
        request.body
    )

    query_request_rid = uuid.uuid4()
    models.QueryRequest(
        query_request_rid=query_request_rid,
        input=exploration_text.input,
        status=models.RequestStatus.PENDING,
        date_request=datetime.now(),
    ).save()

    logging.info(
        f"Sending request out to ChatGPT with query request RID: {query_request_rid}"
    )
    celery_app.send_task(
        name=instantiate_celery.QueueNames.CHATGPT_PROCESS, args=[query_request_rid]
    )

    return JsonResponse({"query_request_rid": query_request_rid})
