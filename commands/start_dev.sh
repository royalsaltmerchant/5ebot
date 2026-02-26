#!/bin/bash

trap "exit" INT TERM ERR
trap "kill 0" EXIT

echo "\n*************** RUNNING TYPESCRIPT ***************\n"
npm run build:watch &

echo "\n*************** STARTING SERVER ***************\n"
npm run dev
