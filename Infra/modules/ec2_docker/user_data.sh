#!/bin/bash
set -xe

# Update system
sudo apt-get update -y
sudo apt-get upgrade -y

# Install Docker
sudo apt install -y docker.io

sudo systemctl start docker
sudo systemctl enable docker
sudo usermod -aG docker ubuntu

# Install git
sudo apt-get install -y git
sudo docker pull rajsingh81/frontend:latest
sudo docker run -d -p 3000:3000 --name e_commerce rajsingh81/frontend:latest


