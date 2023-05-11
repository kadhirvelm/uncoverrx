import django

django.setup()

from typing import List

import openai
from library import exploration_utils, instantiate_celery, models

celery_app = instantiate_celery.instantiate_celery("chatgpt")


def shape_previous_query_requests(previous_query_requests: List[models.QueryRequest]):
    previous_chat_completions = []

    for previous_query_request in previous_query_requests:
        if previous_query_request.status != models.RequestStatus.COMPLETED:
            continue

        previous_chat_completions.append(
            {"role": "user", "content": previous_query_request.input}
        )
        previous_chat_completions.append(
            previous_query_request.result["choices"][0]["message"]
        )

    return previous_chat_completions


@celery_app.task(name=instantiate_celery.QueueNames.CHATGPT_PROCESS)
def chatgpt_process(query_request_rid: str):
    try:
        query_request = models.QueryRequest.objects.filter(
            query_request_rid=query_request_rid
        ).first()

        query_request.status = models.RequestStatus.PROCESSING
        query_request.save()

        all_previous_query_requests = exploration_utils.get_all_previous_query_requests(
            query_request_rid
        )
        previous_query_requests_shaped = shape_previous_query_requests(
            all_previous_query_requests
        )

        chat = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",
            messages=[
                {
                    "role": "system",
                    "content": "You are an assistant to a drug discovery scientist. Please provide results in an ordered list.",
                },
                *previous_query_requests_shaped,
                {"role": "user", "content": query_request.input},
            ],
        )

        query_request.status = models.RequestStatus.COMPLETED
        query_request.result = chat

        query_request.save()
    except Exception as e:
        query_request.status = models.RequestStatus.ERROR
        query_request.save()

        print(e)
