#!/bin/bash
rm -rf dist || exit 0;
(
 npm start
 mkdir dist
 cp -r src/ dist
 cd dist
 git init
 git add .
 git commit -m "Deployed to Github Pages"
 git push --force git@github.com:anvaka/asmalidator master:gh-pages
)
