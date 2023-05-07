from enum import Enum

from celery import Celery


class QueueNames(str, Enum):
    CHATGPT_PROCESS = "chatgpt_process"


def instantiate_celery(name: str):
    app = Celery(name, broker="redis://host.docker.internal:6379")

    app.conf.task_routes = {
        QueueNames.CHATGPT_PROCESS: {"queue": QueueNames.CHATGPT_PROCESS}
    }

    return app
