set -e

npm run build

cd dist

git init
git add -A
git commit -m 'deploy'

git subtree push --prefix dist origin gh-pages

cd -