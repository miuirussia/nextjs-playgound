#!/usr/bin/env bash

set -euo pipefail

PROJECT_NAME="nextjs-playground"

rm -rf ./out
mkdir -p ./out
docker build --tag "$PROJECT_NAME" .
docker save "$PROJECT_NAME" | gzip > "./out/$PROJECT_NAME.tar.gz"
docker image rm "$PROJECT_NAME"
