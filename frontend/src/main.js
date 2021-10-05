import 'font-awesome/css/font-awesome.css'
import Vue from 'vue'

import App from './App'

import './config/bootstrap'
import './config/msgs'
import store from './config/store'
import router from './config/router'

Vue.config.productionTip = false

// TEMPORARIO
require('axios').defaults.headers
  .common['Authorization'] = 
    'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6Ik5pY2siLCJlbWFpbCI6Im5pY2tAZ21haWwuY29tIiwiYWRtaW4iOnRydWUsImlhdCI6MTYzMzIxNzU4OSwiZXhwIjoxNjMzNDc2Nzg5fQ.g5qqeDAK2ztacNY7JDkGFcxDHpxKhD_OLz-7FGVXk0o'

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')