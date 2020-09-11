<template>
  <div class="about">
    <div>
      <p class="pbox" v-for="(item,index) in docuList" :key="index">
        <span class="box">
          <a class="dtitle" :href="item.url" :title="item.title">{{item.title}}</a>
        </span>
        {{item.info}}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      docuList: [
        {
          title: "ES6 入门教程",
          info: "全面介绍 ECMAScript 6 新引入的语法特性",
          url: "https://es6.ruanyifeng.com/",
        },
        {
          title: "JavaScript 教程",
          info: "JavaScript 入门教程",
          url: "https://wangdoc.com/javascript/basic/introduction.html",
        },
      ],
    };
  },
};
</script>

<style scoped>
.pbox {
  padding: 12px 0;
  font-size: 14px;
}
.box {
  display: inline-block;
  width: 120px;
  text-align: right;
  margin-right: 8px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  vertical-align: -3px;
}
.dtitle {
  border-bottom: 1px solid #000;
}
.dtitle:hover {
  border-bottom: 2px solid rgb(231, 136, 136);
}
</style>