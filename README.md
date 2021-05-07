# Used for bug reproduction

Vue3+Element plus 按需引入组件配置国际化后,在dev下正常运行,build产物报错 locale not function

# issue
[vite/issues/3138](https://github.com/vitejs/vite/issues/3138)

# solve methods
按需引入组件[styleImport](https://github.com/anncwb/vite-plugin-style-import) 引起的问题，也由于 [Element Plus](https://github.com/element-plus/element-plus) locale 组件导出行为不一致引发的问题

![图片](https://img.cdn.sugarat.top/mdImg/MTYyMDM3ODcwNzI5Mg==620378707292)

![图片](https://img.cdn.sugarat.top/mdImg/MTYyMDM3ODcyNjYwOQ==620378726609)

```js
import {
  locale,
} from 'element-plus'

import lang from 'element-plus/lib/locale/lang/zh-cn'
import 'dayjs/locale/zh-cn'
// bug
// locale(lang)

// solve bug
if (import.meta.env.PROD) {
  locale.use(lang)
} else {
  locale(lang)
}
```
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