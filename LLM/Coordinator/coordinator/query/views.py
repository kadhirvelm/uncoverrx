import json
import logging
import uuid

from chatgpt import chatgpt_process
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods


def index():
    return JsonResponse({"version": "1.0.0"})


@require_http_methods(["POST"])
def request_exploration_text(request):
    logging.info(json.loads(request.body))

    request_id = uuid.uuid4()

    logging.info(f"Sending request out to ChatGPT with request ID: {request_id}")
    chatgpt_process.chatgpt_process.delay(request_id)

    return JsonResponse({"request_id": request_id})
