import subprocess


def start():
    return subprocess.run(
        [
            "watchmedo",
            "auto-restart",
            "--directory",
            "../../",
            "--pattern",
            "*.py",
            "--recursive",
            "--signal",
            "SIGTERM",
            "--",
            "python",
            "manage.py",
            "runserver",
            "0.0.0.0:8000",
        ],
        cwd="coordinator",
    )


def lint():
    return subprocess.run(["black", "."])


def create_migration():
    return subprocess.run(["python", "manage.py", "makemigrations"], cwd="coordinator")


def test():
    return subprocess.run(["python", "manage.py", "test"], cwd="coordinator")
