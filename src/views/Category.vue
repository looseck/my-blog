<template>
  <div class="category">
    <h2>分类的页面</h2>
  </div>
</template>

<script>
import { request } from "@/network/request.js";

export default {
  name: "Category",
  data() {
    return {};
  },
  mounted() {
    this.getCategory();
  },
  methods: {
    async getCategory() {
      const res = await request("/category");
      console.log(res);
    },
  },
};
</script scoped>

<style>
</style>