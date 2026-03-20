provider "aws" {
  region = var.region
}

# Read existing ECR
data "aws_ecr_repository" "existing" {
  name = var.ecr_repo_name
}

# Optional: check AWS identity
data "aws_caller_identity" "current" {}