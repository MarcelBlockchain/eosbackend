#!/bin/bash
DATADIR="./"

./stop.sh
node index.js  > $DATADIR/mongo-out.log 2> $DATADIR/mongo-err.log &  echo $! > $DATADIR/mongo.pid
