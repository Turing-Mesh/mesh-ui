import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './styles/styles.scss'

Vue.config.productionTip = false

// wrap auth around this
// then put route guards on routes
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
