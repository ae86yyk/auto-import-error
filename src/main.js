import Vue from 'vue'
import VueCompositionAPI from '@vue/composition-api'

import App from './App'
import router from './router'

Vue.use(VueCompositionAPI)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  // store,
  render: h => h(App)
})
