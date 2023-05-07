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
