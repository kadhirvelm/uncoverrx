import django

django.setup()

import logging

from library import instantiate_celery, models

celery_app = instantiate_celery.instantiate_celery("chatgpt")


@celery_app.task(name=instantiate_celery.QueueNames.CHATGPT_PROCESS)
def chatgpt_process(query_request_rid: str):
    query_request = models.QueryRequest.objects.filter(
        query_request_rid=query_request_rid
    ).first()
