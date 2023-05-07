import sys
from pathlib import Path

# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent

SECRET_KEY = "dummy-key"

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

INSTALLED_APPS = ["dummy"]

DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.postgresql_psycopg2",
        "NAME": "cohortrx",
        "USER": "postgres",
        "PASSWORD": "admin",
        "HOST": "host.docker.internal",
        "PORT": "5432",
    }
}

LOGGING = {
    "version": 1,
    "disable_existing_loggers": False,
    "handlers": {
        "console": {
            "class": "logging.StreamHandler",
            "stream": sys.stdout,
        },
    },
    "root": {
        "handlers": ["console"],
        "level": "INFO",
    },
}
