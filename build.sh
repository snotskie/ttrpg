#!/usr/bin/env sh

TAG=`git describe --tags --abbrev=0` npx marp --html --template=bare --input-dir ./md -o ./public 