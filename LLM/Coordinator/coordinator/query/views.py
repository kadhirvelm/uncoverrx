from django.http import JsonResponse
from chatgpt import chatgpt_process


def index(request):
    chatgpt_process.chatgpt_process.delay("some-id-here")

    return JsonResponse({"version": "1.0.0"})
