import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = ()=>import('views/home/Home.vue')
const Category = ()=>import("views/category/Category.vue")
const Cart = ()=>import("views/cart/Cart")
const User = ()=>import("views/user/User.vue")
const Detail = ()=>import("views/detail/Detail")

import Det from "views/det/Det"

Vue.use(VueRouter)

  const routes = [
    {
      path: '/',
      component: Home,
      meta:{index:0}
    },
    {
      path: '/home',
      component: Home,
      meta:{index:0}
    },
    {
      path: '/category',
      component: Category,
      meta:{index:1}
    },
    {
      path: '/cart',
      component: Cart,
      meta:{index:2}
    },
    {
      path: '/user',
      component: User,
      meta:{index:3}
    },
    {
      path: '/detail/:iid',
      component: Detail,
      meta:{index:4}
    },
    {
      path: '/det/:iid',
      component: Det,
      meta:{index:5}
    }
]

const router = new VueRouter({
  routes,
  mode: "history"
})

export default router
