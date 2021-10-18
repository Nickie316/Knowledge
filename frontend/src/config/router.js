import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/components/home/Home'
import AdminPages from '@/components/admin/AdminPages'
import ArticlesByCategory from '@/components/article/ArticlesByCategory'
import ArticleById from '@/components/article/ArticleById'
import Auth from '@/components/auth/Auth'

import { userKey } from '../config/global'

Vue.use(VueRouter)

const routes = [{
   name: 'home',
   path: '/',
   component: Home
}, {
   name: 'adminPages',
   path: '/admin',
   component: AdminPages,
   meta: { requiresAdmin: true }
},{
   name: 'ArticlesByCategory',
   path: '/categories/:id/articles',
   component: ArticlesByCategory
}, { 
   name: 'ArticleById',
   path: '/articles/:id',
   component: ArticleById
}, {
   name: 'auth',
   path: '/auth',
   component: Auth
}]

const router = new VueRouter({
   mode: 'history',
   routes 
      // Como routes tem o mesmo nome se pode usar assim. Mas caso mude o nome das rotas deve ser colocado routes: NomeArrayRotas
})

router.beforeEach((to, from, next) => {
   const json = localStorage.getItem(userKey)

   if(to.matched.some(record => record.meta.requiresAdmin)) {
      const user = JSON.parse(json)
      user && user.admin ? next() : next({ path: '/' })
   } else {
      next()
   }
})

export default router

