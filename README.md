
rsync -e "ssh -i ~/jishcem.pem" -av --exclude={'dist','node_modules'} ./ ubuntu@13.233.201.22:/home/ubuntu/Code/typescript-express
