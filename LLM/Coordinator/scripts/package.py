import subprocess


def start():
    return subprocess.run(
        [
            "watchmedo",
            "autorestart",
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
