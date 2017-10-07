#!/bin/bash

# Declarative terraform/Puppet/whatever nicities may happen once we are on
# a system from this decade
# Until then, shell rulez. '60s still roll!

# This assumes:
# * You have reasonably set up ssh-agent and you are in authorized_keys2
# * You are running this from repo root
# * Deployment server is configured in a magical way that works
# * Incremental deploys are fragile given current setup and will not be used...so...no deploys over GPRS from your phone, sorry.
# * bash & rsync installed

host=${DEPLOYMENT_HOST:-"revy"}
user=${DEPLOYMENT_USERNAME:-"w-dracidoupe-cz"}

remote_root=${DEPLOYMENT_ROOT:-"/var/www/dracidoupe.cz/www_root/nove/htdocs"}

machine="$user@$host"

npm run build && \
rsync -avzt --delete -m ./dist/ $machine:$remote_root/
