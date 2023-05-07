from celery import Celery
from enum import Enum


class QueueNames(str, Enum):
    CHATGPT_PROCESS = "chatgpt_process"


def instantiate_celery(name: str):
    app = Celery(name, broker="redis://host.docker.internal:6379")

    return app
