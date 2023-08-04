import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DetailCatalog from "../views/DetailCatalog.vue"
import CategoryCatalog from "../views/CategoryCatalog.vue"
import OrdersComponent from "../views/OrdersComponent.vue"
import SignComponent from "../views/SignComponent.vue"
import RegistrationComponent from "../views/RegistrationComponent.vue"
import ProfileComponent from "../views/ProfileComponent.vue"
import RestorePasswordComponent from "../views/RestorePasswordComponent.vue"
import AddOrderComponent from "../views/addProductComponent.vue"
import ChatComponent from "../views/ChatApp.vue"


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView,
      props:true,
      meta:{
        requiresAuth:true
      }
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
      component:DetailCatalog,
      meta:{
        requiresAuth:true
      }
    },
    {
      path:"/catalog/category/:id",
      name:"Категория",
      component:CategoryCatalog,
      meta:{
        requiresAuth:true
      }
      
    }
    , {
      path:"/orders",
      name:"orders",
      component:OrdersComponent,
      meta:{
        requiresAuth:true,
        needAuth:true
      }
    },
    , {
      path:"/signIn",
      name:"signIn",
      component:SignComponent,
      meta:{
        requiresAuth:true
      }
    },
    , {
      path:"/registration",
      name:"registration",
      component:RegistrationComponent,
      meta:{
        requiresAuth:true
      }
    },
    , {
      path:"/profile",
      name:"profile",
      meta:{
        requiresAuth:true,
        needAuth:true
      },
      component:ProfileComponent
    },
    , {
      path:"/restore",
      name:"/restore",
      meta:{
        requiresAuth:true
      },
      component:RestorePasswordComponent
    },
    {
      path:"/addOrder",
      name:"addOrder",
      meta:{
        requiresAuth:true
      },
      component:AddOrderComponent
    },
    {
      path:"/chats",
      name:"chats",
      meta:{
        requiresAuth:true,
        needAuth:true
      },
      component:ChatComponent
    }
    

  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth && record.meta.needAuth!=true)) {
      if((localStorage.getItem("user")!=null) && (localStorage.getItem("user")!=undefined) && (localStorage.getItem("user")!=='')  ){
        to.params.user=JSON.parse(localStorage.getItem("user"));
       
        next();
      } 
     
      else{
        next();
      }
      
  }
  else if (to.matched.some(record => record.meta.requiresAuth && record.meta.needAuth)){
    if((localStorage.getItem("user")!=null) && (localStorage.getItem("user")!=undefined) && (localStorage.getItem("user")!=='')  ){
      to.params.user=JSON.parse(localStorage.getItem("user"));
      next();
    } 
   
    else{
      next({path:"/signIn"});
    }
  }
  else{
    next();
  }
 
 
   })

export default router
