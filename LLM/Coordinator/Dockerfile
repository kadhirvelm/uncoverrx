FROM python:3.11

RUN pip install poetry

WORKDIR /uncoverrx

COPY ./LLM/Library ./Library
COPY ./LLM/ChatGPT ./ChatGPT
COPY ./LLM/Coordinator ./Coordinator

WORKDIR /uncoverrx/Coordinator

RUN poetry install

CMD poetry run start
