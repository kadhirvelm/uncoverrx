import logging

from django.http import JsonResponse
from library import instantiate_celery
from ninja import Router, Schema

celery_app = instantiate_celery.instantiate_celery("coordinator_project")


router = Router()


def index():
    return JsonResponse({"version": "1.0.0"})


class ResolveQueryRequest(Schema):
    query_request_rid: str


class ResolveQueryResponse(Schema):
    query_request_rid: str


@router.post("/request_exploration_text", response=ResolveQueryResponse)
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
