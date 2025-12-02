resource "aws_instance" "docker_ec2" {
  ami           = "ami-0ecb62995f68bb549" # Ubuntu 24.04 (Mumbai)
  instance_type = var.instance_type
  key_name      = var.key_name
  associate_public_ip_address = true
  user_data     = <<-EOF
  #!/bin/bash

# Update system
sudo apt update -y

# Install Docker
sudo apt install docker.io -y

sudo systemctl start docker
sudo systemctl enable docker
sudo usermod -aG docker ubuntu

sudo docker pull rajsingh81/frontend:latest
sudo docker run -d -p 3000:3000 --name e_commerce rajsingh81/frontend:latest
EOF


  tags = {
    Name = "docker-ec2"
  }
}