#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

npm run build

cd .vuepress/dist


git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:lxb007981/lxb007981.github.io.git master:gh-pages

cd -