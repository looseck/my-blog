<template>
  <header id="header">
    <!-- 文字 logo 部分 -->
    <div class="logo" @click="toHome"></div>
    <div class="site-name" @click="toHome">
      <h1>CK</h1>
    </div>
    <!-- 右侧 菜单 路由部分 -->
    <div class="right-menu">
      <div>
        <router-link to="/" class="menu-item-router">首页</router-link>
      </div>
      <div class="category">
        <router-link to="/category" class="menu-item-router">分类</router-link>
      </div>
      <div>
        <router-link to="/document" class="menu-item-router">文档</router-link>
      </div>
      <div>
        <router-link to="#" class="menu-item-router">归档</router-link>
      </div>
      <div>
        <router-link to="/about" class="menu-item-router">关于</router-link>
      </div>
      <!-- 搜索框部分 -->
      <div class="head-search">
        <a href="#" class="menu-item" v-if="!searchFlag" @click.prevent="searchFlag=!searchFlag">搜索</a>
        <input
          type="text"
          class="search"
          placeholder="请输入...."
          v-else
          v-focus
          @keyup.enter="search"
          @blur="search"
        />
      </div>
      <div class="profile">
        <a herf="#" class="menu-item">我的</a>
        <ul class="menu-item-nav">
          <li>中心</li>
          <li>个人中心</li>
          <li>发帖记录</li>
          <li>退出登录</li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
import Vue from "vue";
//  注册一个全局自定义指令 `v-focus`
Vue.directive("focus", {
  // 当被绑定的元素插入到 DOM 中时....
  inserted(el) {
    // 获取聚焦
    el.focus();
  },
});
export default {
  name: "Header",
  data() {
    return {
      searchFlag: false,
    };
  },
  methods: {
    toHome() {
      if (this.$route.path === "/") {
        return;
      }
      this.$router.replace("/");
    },
    search() {
      // 搜索写在这儿
      this.searchFlag = !this.searchFlag;
    },
  },
};
</script>

<style scoped>
#header {
  height: 50px;
  user-select: none;
  position: relative;
  margin-bottom: 32px;
}
/* .container {
  margin: 0 auto;
  width: 800px;
  height: 50px;
  position: relative;
} */
/* 左边 博客名 logo*/
.site-name {
  height: 32px;
  cursor: pointer;
}
.site-name h1 {
  line-height: 32px;
  color: #383838;
  font-size: 24px;
  /* letter-spacing: 1px; */
}
.logo {
  cursor: pointer;
  float: left;
  margin-right: 20px;
  height: 50px;
  width: 50px;
  background: url(../assets/img/xianrenzhang.svg) no-repeat;
  background-size: contain;
}
/* 右侧 目录 */
.right-menu {
  float: left;
  display: flex;
}
.right-menu > div {
  line-height: 16px;
  height: 16px;
  padding-right: 16px;
  margin-right: 16px;
  position: relative;
  font-size: 14px;
  border-right: 1px dotted #42b983;
  letter-spacing: 1px;
}
.menu-item {
  cursor: pointer;
}
.right-menu > div:last-child {
  border-right: none;
}
/* 搜索框 */
.head-search .search {
  border: none;
  outline: none;
  width: 100px;
  height: 16px;
  font-size: 14px;
  letter-spacing: 1px;
}
/* 下拉菜单 */
.menu-item-nav {
  display: none;
  position: absolute;
  right: -10px;
  top: 16px;
  box-shadow: 0 3px 4px rgba(0, 21, 41, 0.1);
}
.menu-item-nav li {
  width: 80px;
  height: 24px;
  line-height: 24px;
  padding: 0 24px 0 12px;
  cursor: pointer;
}
.menu-item-nav li:hover {
  color: #42b983;
  background-color: rgba(0, 21, 41, 0.06);
}
.profile:hover .menu-item-nav {
  display: block;
}

.menu-item-router:hover {
  border-bottom: 1px solid #42b983;
}
/* .router-link-exact-active {
  border-bottom: 1px solid #42b983;
} */
</style>