FROM python:3.9

RUN curl -sSL https://install.python-poetry.org | python3 -

COPY . .
RUN poetry install

CMD poetry run start
