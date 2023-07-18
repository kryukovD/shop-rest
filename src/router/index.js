import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DetailCatalog from "../views/DetailCatalog.vue"
import CategoryCatalog from "../views/CategoryCatalog.vue"


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Главная',
      component: HomeView,
      meta:"Главная"
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path:"/catalog/:id",
      name:"card",
      component:DetailCatalog
    },
    {
      path:"/catalog/category/:id",
      name:"Категория",
      component:CategoryCatalog
    }
    , {
      path:"/orders",
      name:"Заказы",
      component:CategoryCatalog
    }
    

  ]
})

export default router
