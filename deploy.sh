#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
# cd docs

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git checkout -b main
git add -A
# customize the line below before submitting
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git main

# deploy to our root dir....NOT RECOMMENDED if you need to preview use 'npm run build && npm run preview'
git push -f git@github.com:pulsar-edit/pulsar-edit.github.io.git

# if you are deploying to https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git main:gh-pages

cd -
