<template>
  <div class="home">
    <div class="about">
      <p>
        在这里找到我：
        <a href="https://github.com/looseck">
          <i>github</i>
        </a>
      </p>
    </div>
    <!-- 文章列表 -->
    <div class="article-list">
      <span class="h1">
        <a href="#">文章</a>
      </span>
      <ul class="post-list">
        <li class="post-item" v-for="item in data" :key="item.id">
          <div class="meta-info">
            <time>{{item.update_time | capitalize}}</time>
          </div>
          <span class="meta-title">
            <a :href="'/article/'+item.id" @click="getPost(item.id)">{{item.title}}</a>
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// 网络请求
import { request } from "@/network/request.js";
import Vue from "vue";

// 过滤器
Vue.filter("capitalize", function (value) {
  // 过滤器业务逻辑
  value = value.toString();
  return value.split("T")[0];
});

export default {
  name: "Home",
  data() {
    return {
      data: [],
    };
  },
  mounted() {
    this.fetchArtLists();
  },
  methods: {
    // 获取所有文章
    async fetchArtLists() {
      let res = await request("/article");
      this.data = res.result;
    },
    // 根据 id 取文章
    async getPost(id) {
      let a = await request("/article/" + id);
      console.log(a);
    },
  },
};
</script>

<style>
.about > p {
  font-size: 14px;
  height: 24px;
  line-height: 24px;
  padding: 14px 0;
}
.h1 {
  font-size: 22px;
  letter-spacing: 1px;
  display: block;
  margin: 48px 0 16px 0;
}
.post-item {
  height: 24px;
  line-height: 24px;
  display: flex;
  margin-bottom: 5px;
  font-size: 14px;
}
.meta-info {
  min-width: 100px;
  margin-right: 16px;
  color: #666;
}
.meta-title a {
  color: #383838;
  text-decoration: underline solid rgb(56, 56, 56);
}
.meta-title a:hover {
  text-decoration: underline solid tomato;
}
</style>
