# Used for bug reproduction

Vue3+Element plus 配置国际化后,在dev下正常运行,build产物报undefined

# issue
[vite/issues/3138](https://github.com/vitejs/vite/issues/3138)

# reproduction steps

## clone project
```sh
git clone https://github.com/ATQQ/vite-undefined-bug-demo.git
```

## install dep
use yarn 
```sh
yarn install
```

## dev run 
dev is ok
```sh
yarn dev
```

![图片](https://img.cdn.sugarat.top/mdImg/MTYxOTg4MzUwMzYyMQ==619883503621)

## build run error

```sh
yarn build
```

next
```sh
yarn serve
```

then you can get the bug in browser

I use chrome  89.0.4389.114 on linux

![图片](https://img.cdn.sugarat.top/mdImg/MTYxOTg4MzYxOTQzMw==619883619433)

![图片](https://img.cdn.sugarat.top/mdImg/MTYxOTg4MzY0NzE2Ng==619883647166)