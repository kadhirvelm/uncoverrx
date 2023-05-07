import subprocess


def build_docker_images():
    images_to_build = ["ChatGPT", "Coordinator"]

    for image in images_to_build:
        print(f"Building image for {image}")
        subprocess.run(
            [
                "docker",
                "build",
                ".",
                "-f",
                f"./LLM/{image}/Dockerfile",
                "-t",
                f"cohortrx-{image.lower()}",
            ]
        )


if __name__ == "__main__":
    build_docker_images()
