#!/usr/bin/env bash

export NODE_ENV=development

if [ "$1" = "test" ] ; then
    export NODE_ENV=test
fi
if [ "$1" = "prod" ] ; then
    export NODE_ENV=production
fi
if [ "$2" = "trace" ] ; then
    export FORCE_TRACE=TRACE
fi

export NODE_CONFIG_DIR=./backend/_dist/config

./node_modules/.bin/nodemon -w ./backend/_dist -i ./backend/_dist/test ./backend/_dist/index.js