FROM python:3.11

RUN pip install poetry

WORKDIR /uncoverrx

COPY ./LLM/Library ./Library
COPY ./LLM/ChatGPT ./ChatGPT

WORKDIR /uncoverrx/ChatGPT

RUN poetry install

CMD poetry run start
