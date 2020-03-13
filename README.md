# mobilevue

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

# 拓展 - 移动端项目基本搭建

1. vue create 初始化项目

2. 配置自动打开浏览器, vue.config.js

   ```js
   module.exports = {
     devServer: {
       port: 3000,
       open: true
     }
   }
   ```

3. 新建 Index.vue 首页, 配置路由

4. 引入 base.css

## rem 布局 - 插件 postcss-pxtorem 的配置

https://www.cnblogs.com/lml2017/p/9953429.html

1. 安装插件

   ```
   yarn add lib-flexible postcss-px2rem
   ```

2. **在 public 中的 index.html 中删除 meta 标签**

   flexible 会为页面根据屏幕自动添加`<meta name='viewport' >`标签，动态控制`initial-scale，maximum-scale，minimum-scale`等属性的值。

3. 在 src / main.js 中导入插件包

   ```js
   // 导入 rem 的 js, 动态的设置了, 不同屏幕的html根元素的 font-size
   import 'lib-flexible'
   ```

4. 配置 vue.config.js

   ```js
   module.exports = {
     devServer: {
       port: 3000,
       open: true
     },
     // rem 的配置
     css: {
       loaderOptions: {
         css: {},
         postcss: {
           plugins: [
             require('postcss-px2rem')({
               // 适配 375 屏幕, 设计图750中量出来的尺寸要 / 2
               // 配置成 37.5 是为了兼容 没有适配 rem 布局的第三方 ui 库
               remUnit: 37.5
             })
           ]
         }
       }
     }
   }
   ```

## 目录别名的配置

导入组件路径麻烦, 可以配置别名 https://www.cnblogs.com/zhouyingying/p/11382157.html

配置路径别名，方便引用，不用写那么长

配置前:

```js
import Test from '../components/Test.vue'
```

配置后(不用再关心文件层级关系):

```js
import Test from 'components/Test.vue'

import Test from '@/components/Test.vue'
```

配置 vue.config.js

```js
const path = require('path') // 引入path模块
function resolve(dir) {
  return path.join(__dirname, dir) // path.join(__dirname)设置绝对路径
}

module.exports = {
  // 别名的配置
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('./src'))
      .set('components', resolve('./src/components'))
      .set('views', resolve('./src/views'))
      .set('assets', resolve('./src/assets'))
    // set第一个参数：设置的别名，第二个参数：设置的路径
  }
}
```

小注意点:

template 结构中的文件地址和 style 中的文件地址, 如果想用目录别名, 需要加 ~ 前缀, 而 js 中不需要

```html
<template>
  <div>
    <img src="~assets/banner01.jpg" alt="" />
  </div>
</template>

<style>
  h3 {
    height: 50px;
    line-height: 50px;
    text-align: center;
    background: url('~assets/bg.jpg');
  }
</style>
```

## 底部完成 - 基础路由配置完成

`index.vue`

```html
<template>
  <div class="index">
    <router-view></router-view>

    <div class="pp-footer">
      <ul>
        <li>
          <router-link to="/home">
            <i class="iconfont icon-home"></i>
            <p>首页</p>
          </router-link>
        </li>
        <li>
          <router-link to="/category">
            <i class="iconfont icon-category"></i>
            <p>分类页</p>
          </router-link>
        </li>
        <li>
          <router-link to="/goodslist">
            <i class="iconfont icon-goodslist"></i>
            <p>好物清单</p>
          </router-link>
        </li>
        <li>
          <router-link to="/mybuying">
            <i class="iconfont icon-mybuying"></i>
            <p>我的易购</p>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="scss" scoped>
  // .box {
  //   width: 200px;
  //   height: 200px;
  //   background-color: pink;
  //   background: url('~assets/logo.png')
  // }
  .index {
    width: 100%;
    height: 2000px;
    background-color: skyblue;
  }
  .pp-footer {
    width: 100%;
    height: 50px;
    position: fixed;
    left: 0;
    bottom: 0;
    background-color: #fff;
    ul {
      display: flex;
    }
    li {
      flex: 1;
      a {
        display: block;
        text-align: center;
        padding-top: 2px;
        &.router-link-active {
          color: orange;
        }
        i {
          font-size: 18px;
        }
        p {
          font-size: 12px;
        }
      }
    }
  }
</style>
```

**配置子路由**

```js
import Vue from 'vue'
import VueRouter from 'vue-router'
// import Index from '@/views/Index.vue'
import Index from 'views/Index.vue'
import Home from 'views/Home.vue'
import Category from 'views/Category.vue'
import Goodslist from 'views/Goodslist.vue'
import Mybuying from 'views/Mybuying.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: Index,
    children: [
      { path: '', redirect: '/home' },
      { path: '/home', component: Home },
      { path: '/category', component: Category },
      { path: '/goodslist', component: Goodslist },
      { path: '/mybuying', component: Mybuying }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
```
