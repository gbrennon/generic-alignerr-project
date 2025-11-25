FROM python:3.12-slim

WORKDIR /app

RUN pip install --no-cache-dir poetry

COPY src/ ./src/
COPY pyproject.toml poetry.lock* ./
COPY README.md .
ENV PYTHONPATH=/app/src:$PYTHONPATH
RUN ls -l /app
RUN poetry install --no-root

CMD ["poetry", "run", "python", "src/manage.py", "runserver", "0.0.0.0:8000"]
