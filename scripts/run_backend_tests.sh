export NODE_ENV=test
export NODE_CONFIG_DIR=./_dist/_config

./node_modules/.bin/nodemon -w ./backend/_dist -d 0.5 -x ./node_modules/.bin/mocha ./backend/_dist/tests/index.js -r should -t 10000 -bail