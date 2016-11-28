echo "Do you really want to deploy on STAGING??? [y/n]: "
read reply

if [ $reply =- ^[yY]$ ]
then
	ng build && scp -r dist/* root@staging.register.hackfmi.com:/usr/share/nginx/html/
else
	exit 1
fi
