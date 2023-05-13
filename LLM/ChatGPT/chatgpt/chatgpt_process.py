import django

django.setup()

from typing import List

import openai
from library import exploration_utils, instantiate_celery, llm_dataclasses, models

celery_app = instantiate_celery.instantiate_celery("chatgpt")


def shape_previous_query_requests(previous_query_requests: List[models.QueryRequest]):
    previous_chat_completions = []

    for previous_query_request in previous_query_requests:
        if previous_query_request.status != models.RequestStatus.COMPLETED:
            continue

        llm_input: llm_dataclasses.LLMInput = llm_dataclasses.LLMInput.schema().loads(
            previous_query_request.input
        )
        llm_result: llm_dataclasses.LLMResult = (
            llm_dataclasses.LLMResult.schema().loads(previous_query_request.result)
        )

        previous_chat_completions.append({"role": "user", "content": llm_input.message})
        previous_chat_completions.append(
            {"role": "assistant", "content": llm_result.message}
        )

    return previous_chat_completions


@celery_app.task(name=instantiate_celery.QueueNames.CHATGPT_PROCESS)
def chatgpt_process(query_request_rid: str):
    query_request = models.QueryRequest.objects.filter(
        query_request_rid=query_request_rid
    ).first()

    try:
        query_request.status = models.RequestStatus.PROCESSING
        query_request.save()

        all_previous_query_requests = exploration_utils.get_all_previous_query_requests(
            query_request_rid
        )
        previous_query_requests_shaped = shape_previous_query_requests(
            all_previous_query_requests
        )

        llm_input_request: llm_dataclasses.LLMInput = (
            llm_dataclasses.LLMInput.schema().loads(query_request.input)
        )

        chat = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",
            messages=[
                {
                    "role": "system",
                    "content": "You are an assistant to a drug discovery scientist. Please provide results in an ordered list.",
                },
                *previous_query_requests_shaped,
                {"role": "user", "content": llm_input_request.message},
            ],
        )

        llm_result_from_request: llm_dataclasses.LLMResult = (
            llm_dataclasses.LLMResult.schema().loads(
                {"message": chat["choices"][0]["message"], "raw_result": chat}
            )
        )

        query_request.status = models.RequestStatus.COMPLETED
        query_request.result = llm_result_from_request

        query_request.save()
    except Exception as e:
        query_request.status = models.RequestStatus.ERROR
        query_request.save()

        print(e)
