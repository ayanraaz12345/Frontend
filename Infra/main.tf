provider "aws" {
  region = var.region
}

module "docker_ec2" {
  source        = "./modules/ec2-docker"
  instance_type = var.instance_type
  key_name      = var.key_name
  repo_url      = var.repo_url
}

output "ec2_public_ip" {
  value = module.docker_ec2.public_ip
}
