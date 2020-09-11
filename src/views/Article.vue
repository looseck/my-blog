<template>
  <div class="article">
    <header>
      <h1 id="h1" class="article-title">{{data.title}}</h1>
      <div class="meta">
        <span class="author">ck</span>
        <div class="postdate">
          <span>{{data.update_time | capitalize}}</span>
        </div>
        <div class="article-category">
          <span>分类：{{data.category}}</span>
        </div>
      </div>
    </header>
    <div v-html="data.content" class="article-content"></div>
  </div>
</template>

<script>
// 网络请求
import { request } from "@/network/request.js";

export default {
  name: "Article",
  data() {
    return {
      data: [],
    };
  },
  mounted() {
    this.getPost();
  },
  methods: {
    // 根据 id 取文章
    async getPost() {
      const id = this.$route.params.id;
      this.data = await request("/article/" + id);
    },
  },
};
</script>

<style scoped>
.article {
  width: 100%;
  overflow: hidden;
}
#h1 {
  color: #2bbc8a;
  font-size: 24px;
}
.meta {
  color: #8c8c8c;
  font-size: 14px;
  height: 24px;
  line-height: 24px;
  margin-bottom: 16px;
}
.meta .author {
  text-transform: uppercase;
  font-weight: 600;
  padding-right: 8px;
}
.meta .postdate {
  display: inline;
}
.meta .article-category {
  display: inline;
}
.article-category span {
  margin-left: 8px;
  padding-left: 8px;
  border-left: 1px solid #8c8c8c;
}
.article-content {
  line-height: 32px;
}
</style>