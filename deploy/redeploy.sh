# Redeploy
docker-compose down && docker rmi $(docker images -q) && docker-compose up -d --build
# Status check
docker-compose ps
sudo systemctl status nginx