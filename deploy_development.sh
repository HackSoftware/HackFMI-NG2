echo "You are about to DEPLOY on STAGING! Are you sure? [y/n]:"
read reply

if [ $reply = "y" ] || [ $reply = "Y" ] || [ $reply = "yes" ]
then
    ng build && scp -r dist/* root@staging.register.hackfmi.com:/usr/share/nginx/html/
else
    exit 1
fi
