#!/bin/bash
yum update -y

# Install Docker
amazon-linux-extras install docker -y
systemctl start docker
systemctl enable docker
usermod -a -G docker ec2-user

# Install Git
yum install -y git

# Pull your project
git clone ${repo_url} /home/ec2-user/app

cd /home/ec2-user/app

# Build Docker image
docker build -t myapp .

# Run Docker container
docker run -d -p 3000:80 myapp
