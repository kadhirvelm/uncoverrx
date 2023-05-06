FROM python:3.11

RUN pip install poetry

WORKDIR /cohortrx

COPY . .

RUN poetry install

CMD poetry run start
