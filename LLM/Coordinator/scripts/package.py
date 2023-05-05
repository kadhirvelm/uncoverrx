import subprocess


def start():
    return subprocess.run(["python", "manage.py", "runserver"], cwd="coordinator")


def lint():
    return subprocess.run(["black", "."])
