import django

django.setup()

import openai
from library import instantiate_celery, models

celery_app = instantiate_celery.instantiate_celery("chatgpt")


@celery_app.task(name=instantiate_celery.QueueNames.CHATGPT_PROCESS)
def chatgpt_process(query_request_rid: str):
    try:
        query_request = models.QueryRequest.objects.filter(
            query_request_rid=query_request_rid
        ).first()

        query_request.status = models.RequestStatus.PROCESSING
        query_request.save()

        chat = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",
            messages=[{"role": "user", "content": query_request.input}],
        )

        query_request.status = models.RequestStatus.COMPLETED
        query_request.result = chat

        query_request.save()
    except Exception as e:
        query_request.status = models.RequestStatus.ERROR
        query_request.save()

        print(e)
