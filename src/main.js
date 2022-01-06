import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { createProvider } from './vue-apollo'
import store from './store'
import '@/assets/styles/reset.css'
import '@/assets/styles/main.css'

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  apolloProvider: createProvider(),
  store,
  render: h => h(App)
}).$mount('#app')
