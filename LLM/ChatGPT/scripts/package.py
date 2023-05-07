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
            "celery",
            "-A",
            "chatgpt_process",
            "worker",
            "-Q",
            "chatgpt_process",
            "-n",
            "worker@cohortrx-development",
        ],
        cwd="chatgpt",
    )
