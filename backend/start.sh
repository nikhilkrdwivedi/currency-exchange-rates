#!/usr/bin/env bash

appname="currency-exchange"
pm2 describe $appname > /dev/null
RUNNING=$?

if [ "${RUNNING}" -ne 0 ]; then
  pm2 start ./index.js --name="$appname" -i max
else
  pm2 reload $appname
fi;
