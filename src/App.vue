<script>
import { RouterLink, RouterView } from 'vue-router'
import AppHeader from "./components/AppHeader.vue"
import AppFooter from "./components/FooterComponent.vue"
import {getAllProductsForUsers} from "./api.js"
// import { getAllOrders} from "../api.js";

export default{
  components:{
    "app-header":AppHeader,
    "app-footer":AppFooter

  },
  data(){
    return{
      countBaskets:0
    }
  }
  ,methods:{
    addOrder(){
      this.countBaskets++;
    },
    updateBasket(){
      getAllProductsForUsers(JSON.parse(localStorage.getItem("user")).api_token).then((response) => {
      this.countBaskets=response.data.data.length
    })
    },
    zeroing(){
      this.countBaskets=0
    }
  }
  ,
  created(){
    if(localStorage.getItem("user")!==null){
      getAllProductsForUsers(JSON.parse(localStorage.getItem("user")).api_token).then((response) => {
      this.countBaskets=response.data.data?.length || 0
    })
    }
   

  }
}

</script>

<template>
  <app-header :countBaskets="countBaskets"  ></app-header>
  <RouterView @addOrder="addOrder()" @userAuth="updateBasket" @zeroing="zeroing()"/>
  <app-footer :counterBasket="countBaskets"> </app-footer>
</template>

<style>
  @import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
  a{
        text-decoration: none;
    }
  .logo {
  width: 170px;
  background: #ebf0ff;
  border-radius: 8px;
  padding: 15px;
  font-weight: 600;
}
.breadcrumb a {
  color: #9098b1;
  font-size: 14px;
  line-height: 16px;
}
body{
  font-family: "Inter";
  font-size: 14px ;
}
.breadcrumb a:not(:first-child):before {
  content: "—";
  padding: 0px 6px;
}
.breadcrumb a:before:last-child {
  color: #223263;
}
.row>*{
  padding: 0px;
}
.container{
  padding: 0px;
}
ul{
  padding: 0px;
  margin: 0px;
}

#app{
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
main{
  flex-grow: 1;
}
a{
  color: unset;
}
h1{
  font-family: "Inter";
  font-weight: 600;
  font-size: 24px;
  line-height: 30px;
  color: #223263;
}
p{
  margin: 0px;
}
.row{
  margin: 0px;
}
/*Глобальный адаптив */
@media (max-width:767.8px) {
   .container{
    padding: 0px 20px;
   } 

   .logo {
  width: 81px;
  height: 26px;
  background: #D9D9D9;
  border-radius: unset;
  padding: 15px;
  font-weight: 700;
}
  }
</style>
