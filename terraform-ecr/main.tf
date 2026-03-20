provider "aws" {
  region = var.region
}

resource "aws_ecr_repository" "my_app" {
  name = var.ecr_repo_name

  image_scanning_configuration {
    scan_on_push = true
  }

  image_tag_mutability = "MUTABLE"
}