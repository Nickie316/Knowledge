import 'font-awesome/css/font-awesome.css'
import Vue from 'vue'

import App from './App'

import './config/bootstrap'
import './config/msgs'
import './config/axios'
import './config/mq'

import store from './config/store'
import router from './config/router'

Vue.config.productionTip = false

// TEMPORARIO   // Para acessar diretamente com o Token copiado do Backend
/*require('axios').defaults.headers
  .common['Authorization'] = 
    'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6Ik5pY2siLCJlbWFpbCI6Im5pY2tAZ21haWwuY29tIiwiYWRtaW4iOnRydWUsImlhdCI6MTYzNDQyNzcwOCwiZXhwIjoxNjM0Njg2OTA4fQ.gDUmonMAdspiPINJzA_cz5KBVDsXm_SRy6pMmyHG6Kc' */

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')