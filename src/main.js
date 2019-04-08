import Vue from 'vue'
import App from './App'
import Users from './components/Users'

Vue.config.productionTip = false
//全局注册组件
Vue.component("users",Users);


/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
