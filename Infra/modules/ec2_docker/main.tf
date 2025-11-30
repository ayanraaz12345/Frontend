resource "aws_instance" "docker_ec2" {
  ami           = "ami-0ecb62995f68bb549" # Amazon Linux 2 (Mumbai)
  instance_type = var.instance_type
  key_name      = var.key_name

  user_data = file("${path.module}/user_data.sh")

  tags = {
    Name = "docker-ec2-module"
  }
}

output "public_ip" {
  value = aws_instance.docker_ec2.public_ip
}
