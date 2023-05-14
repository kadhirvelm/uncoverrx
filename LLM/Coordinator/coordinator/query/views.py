import logging

from coordinator.query.dataclasses.request_exploration_text import ResolveQueryRequest
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
from library import instantiate_celery
from ninja import NinjaAPI, Schema

celery_app = instantiate_celery.instantiate_celery("coordinator_project")

api = NinjaAPI()


def index():
    return JsonResponse({"version": "1.0.0"})


class ResolveQueryRequest(Schema):
    query_request_rid: str


@api.post("/request_exploration_text")
def request_exploration_text(request, resolve_query_request: ResolveQueryRequest):
    # In theory we could fetch the query here, understand what kind of request the user made
    # and pick the according worker to send the request to

    logging.info(
        f"Sending request out to ChatGPT with query request RID: {resolve_query_request}"
    )
    celery_app.send_task(
        name=instantiate_celery.QueueNames.CHATGPT_PROCESS,
        args=[resolve_query_request.query_request_rid],
    )

    return JsonResponse({"query_request_rid": resolve_query_request.query_request_rid})
