#!/usr/bin/env bash

set -euo pipefail

docker build -t nextjs-docker .
docker run --rm -it -p 3000:3000 nextjs-docker
