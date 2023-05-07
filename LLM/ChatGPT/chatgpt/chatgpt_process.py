import django

django.setup()

from library import instantiate_celery

celery_app = instantiate_celery.instantiate_celery("chatgpt")


@celery_app.task(name=instantiate_celery.QueueNames.CHATGPT_PROCESS)
def chatgpt_process(request_id: str):
    print("Hello world!", request_id)
