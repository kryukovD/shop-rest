<script>
import { getAllProducts ,getPaginateProducts} from "../api.js";
const apiServer = import.meta.env.VITE_APP_SERVER
import Observer from "../components/Observer.vue"
export default {
    components:{
        "Observer":Observer
    },
  data() {
    return {
      catalogCards: [],
      paginationCards:[],
      page:1,
      singlePageItems:10,
      apiServer:apiServer

    };
  },
  methods:{
    intersected() {
        // this.paginationCards=[...this.paginationCards,...this.catalogCards.slice((this.page-1)*(this.singlePageItems),(this.page*(this.singlePageItems)))];
        getPaginateProducts(this.page).then((responce)=>{
          if(responce.data.data.length>0){
            this.paginationCards=[...this.paginationCards,...responce.data.data]
            this.page+=1
          }
          
        })
        
    }
  
  },
   created(){
     getAllProducts(this.page).then((response)=>{
      console.log(response.data.data)
      this.catalogCards.data=response.data.data
     })
    
  },
 

};
</script>

<template>
    
  <section class="section-catalog">
    <AmBreadcrumbs
    :showCurrentCrumb="true" />
    <div class="container">
      <div class="d-flex justyf-content-center text-center" v-if="paginationCards.length==0"><p class="text-center">Каталог пуст</p></div>
      <div class="grid-row">
        <!-- Карточка-->
   
        <router-link  :to="{path:'catalog/' + card.id}"
          class="catalog-card d-flex flex-column"
          v-for="(card, key) in paginationCards"
          :key="key"
        >
          <div class="catalog-card__image-wrapper order-1 order-md-1">
            <img :src="apiServer + card.images.preview" />
          </div>
          <div class="catalog-card__description order-4 order-md-2">
            <div class="catalog-card__price">
              <span>{{ card.price }} ₽</span>
            </div>
          </div>
          <div
            class="catalog-card__discount d-flex align-items-center order-3 order-md-3"
          >
            <div class="wb-discount d-flex align-items-center">
              <a class="d-flex align-items-center" href="javascript:void(0)"
                ><img src="../assets/images/icons/wb.png" />
                <span class="wb-discount__price">{{card.price_discount }} ₽ </span>
              </a>
            </div>
            <div class="cashback d-flex align-items-center">
              <span> Кэшбэк {{ card.cashback }} ₽ </span>
              <div class="discount-icon">-{{card.discount}}%</div>
            </div>
          </div>
          <div class="catalog-card__quantity d-flex order-5 order-md-4">
            <span
              >В наличии {{ card.left_count }}/{{ card.total_count }} шт</span
            >
          </div>
          <div class="catalog-card__title order-2 order-md-5">
            <span> {{ card.name }} </span>
          </div>
       
      </router-link>

        <!-- Конец карточки-->
      </div>
    </div>
  
  </section>
  <Observer @intersect="intersected" ></Observer>

</template>
<style scoped>

.grid-row {
  display: grid;
  row-gap: 50px;
  grid-template-columns: repeat(auto-fill, minmax(223px, 223px));
  justify-content: space-between;

}
.catalog-card__image-wrapper {
  width: 223px;
  aspect-ratio: 223/256;
  margin-bottom: 12px;
  overflow: hidden;
}
.catalog-card__image-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.section-catalog {
  padding: 42px 0px;
  padding-bottom: 30vh;
}
.catalog-card__price {
  font-size: 20px;
  font-weight: 600;
  font-weight: 24px;
  line-height: 24px;
  margin-bottom: 9px;
}
.wb-discount__price {
  color: #223263b2;
  text-decoration: line-through;
}
.grid-row a{
  color: unset;
}
.wb-discount a {
  gap: 10px;
}
.cashback span {
  color: #223263;
  font-size: 12px;
}
.catalog-card__discount {
  gap: 14px;
  margin-bottom: 13.5px;
}
.discount-icon {
  font-size: 11px;
  line-height: 13px;
  font-weight: 600;
  background: #ffc833;
  border-radius: 4px;
  padding: 3.5px 4.5px;
  width: max-content;
}
.cashback {
  gap: 7px;
}
.catalog-card__quantity {
  color: #40bfff;
  font-size: 12px;
  margin-bottom: 9px;
}
@media (max-width:991.8px){
  .section-catalog{
    padding-top: 0px;
  }
}
@media (max-width: 767.8px) {
  .grid-row {
    grid-template-columns: repeat(auto-fit, minmax(156px, 1fr));
    gap: 22px;
  }
  .catalog-card__image-wrapper {
    width: 100%;
    aspect-ratio: 156/208;
    margin-bottom: 12px;
    overflow: hidden;
  }
  .section-catalog {
    padding-top:100px;
    padding-bottom: 23px;
  }
}
</style>
