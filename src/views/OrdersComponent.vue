<template>
  <main class="d-flex flex-column">
    <section class="section-orders">
      <div class="container">
        <h1 class="inner-page-h1"> Заказы</h1>
        <Breadcrumbs :items="breadcrumbs" class="d-none d-md-block" />
        <ul class="tabs-order nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link " id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button"
              role="tab" aria-controls="home" :class="{'active':$route.query.type!=='buying'}" aria-selected="true">Продаю</button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" :class="{'active':$route.query.type=='buying'}" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button"
              role="tab" aria-controls="profile" aria-selected="false" ref="buy">Покупаю</button>
          </li>
          
        </ul>
        <div class="tab-content" id="myTabContent">
          <div class="tab-pane fade  " :class="{'active show':$route.query.type!=='buying'}"  id="home" role="tabpanel" aria-labelledby="home-tab">
            <div class="detail-card-notice ">
                  <span class="d-block detail-notice__title">
                    Гарантия получения кэшбэка</span
                  >
                  <p>
                    WB-кэш гарантирует моментальный перевод кэшбэка, после
                    завершения выкупа.
                  </p>
                  <div class="d-block">
                    <div
                      @click="howWorkDisplay = !howWorkDisplay"
                      class="d-flex align-items-center how-work-information"
                      :class="{ 'how-work-information_active': howWorkDisplay }"
                    >
                      <span>Как это работает? </span>
                      <svg
                        width="12"
                        height="8"
                        viewBox="0 0 12 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 1.5L6 6.5L11 1.5"
                          stroke="#1D9FF8"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                    <div class="how-work__description" v-show="howWorkDisplay">
                      <p>
                        Вы выкупаете за свой счет, после выполнения задания, вам
                        после принятия задания продавцом, в случае отсутствия
                        его принятия, автоматически в течение трех дней после
                        завершения задания вернется вся сумма заказа, вместе с
                        суммой вашего кэшбэка.
                      </p>
                      <p>
                        Внимательно сверяйте реальность скидки кэшбэка,
                        сравнивайте сумму кэшбэка с суммой покупки товара на WB.
                      </p>
                    </div>
                  </div>
                </div>

                <!--Нет активных заказов-->
                <div class="no-orders-block">
                   <span class="subtitle"> У вас пока нет активных выкупов</span>
                   <p>Разместите товар</p>
                   <router-link to="/addOrder" class="btn-public-order btn-default-order"> Разместить товар</router-link>
                </div>

          </div>
          <!-- Покупаю-->

          <div class="tab-pane fade" id="profile" :class="{'active show':$route.query.type=='buying'}" role="tabpanel" aria-labelledby="profile-tab">
            <div class="orders-filters">
              <span @click="activeFilter=1" :class="{'active-filter':activeFilter==1}" >Все </span> <span @click="activeFilter=2" :class="{'active-filter':activeFilter==2}">Выполнено</span> <span @click="activeFilter=3" :class="{'active-filter':activeFilter==3}">Отменено</span>
            </div>


            <div class="grid-orders">

              <router-link  v-for="(acceptOrder,key) of acceptOrders" :to="'/catalog/'+acceptOrder.id" :key="key"
              class="catalog-card d-flex flex-column"
               >
          <div class="catalog-card__image-wrapper order-1 order-md-1">
            <img src="../assets/card.png" />
          </div>
          <div class="catalog-card__description order-4 order-md-2">
            <div class="catalog-card__price">
              <span>{{ acceptOrder.price }}  ₽</span>
            </div>
          </div>
          <div
            class="catalog-card__discount d-flex align-items-center order-3 order-md-3"
          >
            <div class="wb-discount d-flex align-items-center">
              <a class="d-flex align-items-center" href="javascript:void(0)"
                ><img src="../assets/images/icons/wb.png" />
                <span class="wb-discount__price">{{ acceptOrder.price_discount }} ₽ </span>
              </a>
            </div>
            <div class="cashback d-flex align-items-center">
              <span> Кэшбэк 1400 ₽ </span>
              <div class="discount-icon">{{acceptOrder.discount}}%</div>
            </div>
          </div>
          <div class="catalog-card__quantity d-flex order-5 order-md-4">
            <span
              >В наличии {{acceptOrder.leff_count}} / {{acceptOrder.total_count}} шт</span
            >
          </div>
          <div class="catalog-card__title order-2 order-md-5">
            <span>{{acceptOrder.name}}</span>
          </div>
       
      </router-link>

            </div>

          </div>

        </div>
      </div>
    </section>
  </main>
</template>
<script>
import FooterComponent from "../components/FooterComponent.vue";
import BreadCrumbsComponent from "../components/Breadcrumb.vue"
import { getAllProductsForUsers } from "../api";
export default {
  data() {
    return {
      breadcrumbs: [],
      howWorkDisplay: false,
      orders:[],
      activeFilter:1,
      acceptOrders:[],
    };
  },
  components: {
    "app-footer": FooterComponent,
    "Breadcrumbs": BreadCrumbsComponent
  },
  created() {
    this.createBreadcrumbs()
    getAllProductsForUsers(JSON.parse(localStorage.getItem("user")).api_token).then((response) => {
      this.acceptOrders = response.data.data
    })
  },

  methods: {
    createBreadcrumbs() {
      this.breadcrumbs = []
      this.breadcrumbs.push({
        text: "Главная",
        path: "/"
      }, {
        text: "Заказы",
        path: `/orders`
      }

      )
    },
  }

}
</script>
<style scoped>
.tabs-order {
  border:none;
}
.tabs-order button{
  border: none;
  font-family: "Roboto";
  font-weight: 400;
  font-size: 16px;
  color: #22326380;
  padding: 16px 53px;
  background: white;
  border-bottom: 2px solid #D9E2FF
}
.tabs-order button.active{
  border-bottom: 2px solid #40BFFF;
  color: #223263;
  font-weight: 700;
}
.section-orders {
  padding-top: 40px;
  padding-bottom: 40px;
  padding-bottom: 180px;
}
.inner-page-h1{
  margin-bottom: 30px;
}
.detail-card-notice {
  padding-top: 18px;
  padding-bottom: 20px;
  padding-left: 20px;
  padding-right: 41px;
  background: white;
  border-radius: 10px;
  box-shadow: 0px 0px 30px 0px #2b2a3d1a;
  max-width: 640px;
  margin: auto;
}
.detail-notice__title {
  font-size: 16px;
  line-height: 19.2px;
  color: #223263;
  margin-bottom: 12px;
  font-weight: 600;
}
.detail-card__title {
  margin-bottom: 30px;
}
.detail-card-notice{
  margin-bottom: 54px;
}
.how-work-information span{
  color: #40BFFF;
}
.how-work-information svg{
    margin-left: 6px;
}
.detail-notice__title ~ p {
  margin-bottom: 10px;
}
.how-work-information {
  color: #1d9ff8;
  font-weight: 500;
  cursor: pointer;
  margin-bottom: 14px;
}
.how-work-information_active svg {
  transform: rotate(180deg);
}
.how-work__description p:first-child {
  margin-bottom: 10px;
}
.how-work__description {
  font-weight: 400;
  max-width: 560px;
}
.detail-notice__title ~ p {
  margin-bottom: 10px;
}
.how-work-information {
  color: #1d9ff8;
  font-weight: 500;
  cursor: pointer;
  margin-bottom: 14px;
}

.how-work-information_active svg {
  transform: rotate(180deg);
}
.no-orders-block{
  margin: auto;
  width: max-content;
  text-align: center;
}
.no-orders-block .subtitle{
  margin-bottom: 20px;
}
.no-orders-block p{
  font-size: 16px;
  color: #000000B2;
  margin-bottom: 30px;
  font-weight: 400;
}
.btn-public-order{
  padding: 18.5px 67.5px;
}
.orders-filters{
  display: flex;
  gap:10px;
  margin-bottom: 30px;
}
.orders-filters span{
  padding: 12.5px 25.5px;
  border-radius: 6px;
  border: 0.78px solid #9098B1;
  background: white;
  cursor: pointer;
  font-weight: 600;
  line-height: 16.8px;
  font-size: 14px;
  color: #9098B1;
}
.orders-filters span.active-filter{
  background: #40BFFF;
  border-color:#40BFFF;
  color: #FFFFFF;
}
.tabs-order{
  margin-bottom: 40px;
}
.grid-orders {
  display: grid;
  grid-template-columns: repeat(auto-fill,minmax(223px,223px));
  justify-content: space-between;
  row-gap: 50px;
}
.catalog-card__image-wrapper{
  width: 100%;
  margin-bottom: 20px;
}
.catalog-card__image-wrapper img{
  aspect-ratio: 223/256;
  width: 100%;
  height: 100%;
}
.catalog-card__price{
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  color:#333333;
  margin-bottom: 9px;

}
.catalog-card__discount{
  gap: 14px;
  justify-content: space-between;
  margin-bottom: 9px;
}
.catalog-card__quantity {
  color:#40BFFF;
  margin-bottom: 9px;
}
.wb-discount >a{
  gap: 10px;
  font-size: 12px;
  color: #223263B2;
  font-weight: 600;
  line-height: 24px;
  text-decoration: line-through;
}
.cashback {
  font-size: 12px;
  line-height: 14.2px;
  color: #223263;
}
.discount-icon{
  background: #FFC833;
  border-radius: 4px;
  font-weight: 600;
  font-size: 11px;
  line-height: 13.31px;
  padding: 3.5px 4.5px;
}
.cashback{
  gap: 7px;
}
.catalog-card__title  span{
  font-size: 14px;
  color: #223263;
}
  
 
@media (max-width:767.8px){
  .section-orders {
    padding-top: 160px;
    padding-bottom: 40px;
}
 .inner-page-h1{
    font-size: 16px;
    margin: 0px;
    padding-bottom: 20px;
    border-bottom: 1px solid #EBF0FF;
    padding-left: 20px;
    padding-right: 20px;

  }
  .section-orders .container{
    padding: 0px;
  }
  .tab-content{
    padding: 0px 20px;
  }
  .tabs-order li{
    flex-grow: 1;
  }
  .tabs-order li button{
    width: 100%;
  }
  .detail-notice__title{
    font-size: 14px;
  }
  .detail-notice__title ~ p{
    font-size: 12px;
}
.how-work-information{
  font-size: 12px;
}
.detail-card-notice{
    margin-top: 24px;
    margin-bottom: 54px;
}
.no-orders-block {
    margin: auto;
    width:auto;
}


  .section-orders{
    padding-bottom: 110px;
  }
.orders-filters{
  flex-wrap: wrap;
}
.orders-filters span{
   font-size: 12px;
}
.grid-orders[data-v-000d95b8] {
    display: grid;
    grid-template-columns: repeat(auto-fill,minmax(158px,1fr));
    justify-content: space-around;
    column-gap: 5px;
    row-gap: 30px;
}
.catalog-card__discount[data-v-000d95b8] {
    gap: 9px;
    flex-wrap: wrap;
}
.catalog-card__title {
  margin-bottom: 10px;
}

}
</style>
