import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false


// 过滤器
Vue.filter("capitalize", function (value) {
  if (value) {
    // 过滤器业务逻辑
    value = value.toString();
    return value.split("T")[0];
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
