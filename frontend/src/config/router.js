import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/components/home/Home'
import AdminPages from '@/components/admin/AdminPages'

Vue.use(VueRouter)

const routes = [{
   name: 'home',
   path: '/',
   component: Home
}, {
   name: 'adminPages',
   path: '/admin',
   component: AdminPages
}]

export default new VueRouter({
   mode: 'history',
   routes 
      // Como routes tem o mesmo nome se pode usar assim. Mas caso mude o nome das rotas deve ser colocado routes: NomeArrayRotas
})

