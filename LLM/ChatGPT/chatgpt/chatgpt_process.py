import django

django.setup()

from typing import List

import openai
from library import exploration_utils, instantiate_celery, models
from library.constants import generated_constants

celery_app = instantiate_celery.instantiate_celery("chatgpt")


def shape_previous_query_requests(previous_query_requests: List[models.QueryRequest]):
    previous_chat_completions = []

    for previous_query_request in previous_query_requests:
        if previous_query_request.status != generated_constants.Status.COMPLETED:
            continue

        llm_input = generated_constants.LLMInput.from_dict(previous_query_request.input)
        llm_result = generated_constants.LLMResult.from_dict(
            previous_query_request.result
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
        query_request.status = generated_constants.Status.PROCESSING
        query_request.save()

        all_previous_query_requests = exploration_utils.get_all_previous_query_requests(
            query_request_rid
        )
        previous_query_requests_shaped = shape_previous_query_requests(
            all_previous_query_requests
        )

        llm_input_request = generated_constants.LLMInput.from_dict(query_request.input)

        chat = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",
            messages=[
                {
                    "role": "system",
                    "content": "You are an assistant to a drug discovery scientist. Please provide results in an ordered list.",
                },
                {
                    "role": "system",
                    "content": "Only provide results back that you are confident are factually correct.",
                },
                *previous_query_requests_shaped,
                {"role": "user", "content": llm_input_request.message},
            ],
        )

        llm_result_from_request = generated_constants.LLMResult.from_dict(
            {"message": chat["choices"][0]["message"], "raw_result": chat}
        )

        query_request.status = generated_constants.Status.COMPLETED
        query_request.result = llm_result_from_request.to_dict()

        query_request.save()
    except Exception as e:
        query_request.status = generated_constants.Status.ERROR
        query_request.save()

        print(e)
