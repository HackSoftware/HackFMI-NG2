echo "You are about to DEPLOY on PRODUCTION! Are you sure?: [y/n]"
read reply

if [ $reply = "y" ] || [ $reply = "Y" ] || [ $reply = "yes" ]
then
    ng build --prod && scp -r dist/* root@register.hackfmi.com:/usr/share/nginx/html/
else
    exit 1
fi
