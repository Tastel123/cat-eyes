// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vant from 'vant'
import ElementUI from 'element-ui'
import MintUI from 'mint-ui'
import axios from 'axios'
import 'vant/lib/index.css'
import 'mint-ui/lib/style.css'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(Vant);
Vue.use(MintUI)

Vue.prototype.$http = axios

new Vue({
  el: '#app',
  components: { App }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
