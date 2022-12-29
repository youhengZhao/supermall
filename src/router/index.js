import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    redirect:'/home'
  },
  {
    path: "/home",
    name: "Home",
    component: () =>import("../views/Home")
  },
  {
    path: "/category",
    name: "Category",
    component: () =>import("../views/Category")
  },
  {
    path: "/shopcart",
    name: "Shopcart",
    component: () =>import("../views/Shopcart")
  },
  {
    path: "/profile",
    name: "Profile",
    component: () =>import("../views/Profile")
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
