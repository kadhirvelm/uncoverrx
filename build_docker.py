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
                f"uncoverrx-{image.lower()}",
            ]
        )

    print(f"Building image for User")
    subprocess.run(
        [
            "docker",
            "build",
            ".",
            "-f",
            f"./User/Dockerfile",
            "-t",
            f"uncoverrx-user",
        ]
    )


if __name__ == "__main__":
    build_docker_images()
