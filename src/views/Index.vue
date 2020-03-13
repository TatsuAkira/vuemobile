<template>
  <div class="Index">
    <div class="header">
      <div class="header_left">
        <i class="fa fa-home"></i>
      </div>
      <div class="header_center">
        <h2>小明商城</h2>
      </div>
      <div class="header_right">
        <i class="fa fa-search"></i>
      </div>
    </div>
    <div class="main">
      <router-view></router-view>
    </div>
    <div class="footer">
      <ul>
        <router-link to="./home"
          ><i class="fa fa-home"></i>
          <div>首页</div></router-link
        >
        <router-link to="./find"
          ><i class="fa fa-search"></i>
          <div>分类</div></router-link
        >
        <router-link to="./cart"
          ><i class="fa fa-shopping-cart"></i>
          <div>首页</div></router-link
        >
        <router-link to="./user"
          ><i class="fa fa-user"></i>
          <div>首页</div></router-link
        >
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {}
  },
  watch: {
    // 监测变化
  },
  created () {
    // 实例被创建之后执行代码
  },
  methods: {
    // 方法
    xm () {
      console.log('jjj')
    }
  },
  computed: {
    // 计算属性
  },
  components: {
    // 组件的引用
  },
  mounted () {
    // 页面进入时加载内容
  }
}
</script>

<style lang="less">
.Index {
  padding-top: 50px;
  padding-bottom: 100px;
  .header {
    position: fixed;
    display: flex;
    top: 0;
    width: 100%;
    height: 50px;
    line-height: 50px;
    text-align: center;
    background-color: #f18867;
    color: #fff;
    &_left,
    &_right {
      width: 30px;
      font-size: 18px;
    }
    &_center {
      flex: 1;
      font-size: 20px;
    }
  }
  .main {
    background-color: skyblue;
    height: 100%;
    padding-top: 50px;
    padding-bottom: 50px;
    width: 100%;
  }
  .footer {
    background-color: #f18867;
    position: fixed;
    bottom: 0;
    width: 100%;
    ul {
      height: 60px;
      align-items: center;
      text-align: center;
      display: flex;
      a {
        flex: 1;
        &.now {
          color: #fff;
        }
      }
    }
  }
}
</style>
