import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/fa/css/font-awesome.min.css'
import './assets/base.css'
import 'lib-flexible'
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
