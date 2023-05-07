FROM python:3.11

RUN pip install poetry

WORKDIR /cohortrx

COPY ./LLM/Library ./Library
COPY ./LLM/ChatGPT ./ChatGPT

WORKDIR /cohortrx/ChatGPT

RUN poetry install

CMD poetry run start
