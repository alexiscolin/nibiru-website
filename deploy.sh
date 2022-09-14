# Production deployment
yarn
yarn build

BUILD_PATH="out"
REPO_URL="https://github.com/NibiruChain/nibiru-website"

echo nibi.money > $BUILD_PATH/CNAME

cd $BUILD_PATH 
git init 
git add . 
git commit -am "deploy"
git checkout -b gh-pages
git push -u $REPO_URL gh-pages --force
rm -rf .git 
cd ..

# Template: See https://stackoverflow.com/a/65733058/13305627
# git push <remote> `git subtree split --prefix <local-folder> <local-branch>`:<remote-branch> --force
# git push origin `git subtree split --prefix $BUILD_PATH deploy`:gh-pages --force

