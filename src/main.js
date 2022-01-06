import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { createProvider } from './vue-apollo'

import VueApollo from 'vue-apollo'
import { apolloClient } from 'apollo.js'

Vue.config.productionTip = false
  
const apolloProvider = new VueApollo({
  defaultClient: apolloClient
})

Vue.use(VueApollo)

new Vue({
  router,
  vuetify,
  apolloProvider,
  render: h => h(App)
}).$mount('#app')
