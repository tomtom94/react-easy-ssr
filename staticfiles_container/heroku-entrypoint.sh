#!/bin/bash

set -e

echo "Starting Puma server..."

bundle exec puma -C config/puma.rb