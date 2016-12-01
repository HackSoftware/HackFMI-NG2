echo "Do you really want to deploy on PRODUCTION??? [y/n]: "
read reply

if [ $reply =- ^[yY]$ ]
then
    ng build --prod && scp -r dist/* root@register.hackfmi.com:/usr/share/nginx/html/
else
    exit 1
fi