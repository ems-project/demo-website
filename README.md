# demo

First having an up to date elasticms Skeleton in ~/git/website-skeleton :

```console
cd ~/git
git clone https://github.com/ems-project/website-skeleton.git
cd website-skeleton
composer install
```

Than checkout the Demo Skeleton skin:

```console
cd ~/git
git https://github.com/ems-project/demo-website.git
cd demo-website
npm install 
```

Update your vhost with the vhost join to this project and Start laragon (or your lamp server).

To build the project:

```console
npm run dev 
npm run prod
npm run watch
npm run release
npm run zip
```
