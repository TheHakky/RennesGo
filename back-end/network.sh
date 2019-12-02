#!/bin/bash

if [[ $# -ne 2 ]]
then
  echo Expected 2 arguments. Got $#.
  exit 0
fi

network_exists=$(docker network ls | grep -c $1)

if [[ $network_exists -eq 0 ]]
then
  docker network create -d bridge --attachable --subnet $20/24 --gateway $21 $1
fi