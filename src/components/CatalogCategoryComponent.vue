<script>
import { getProductsCategory, getCurrentCategory,getChildCategories } from "../api.js";
import Observer from "../components/Observer.vue";
import Breadcrumb from "../components/Breadcrumb.vue";
const apiServer = import.meta.env.VITE_APP_SERVER
export default {
  components: {
    Observer: Observer,
    Breadcrumb: Breadcrumb,
  },
  data() {
    return {
      catalogCards: [],
      paginationCards: [],
      page: 1,
      singlePageItems: 10,
      dataCategory: {},
      breadcrumbs: [],
      apiServer:apiServer,
      childrenCategories:[]
    };
  },
  methods: {
    intersected() {
      this.getProducts();
    },

    getProducts(){
      getProductsCategory(this.$route.params.id, this.page).then((responce) => {
       
        this.paginationCards = [
          ...this.paginationCards,
          ...responce.data.data.products,
        ];
        this.page += 1;
      });
    },
    getCategory() {
      getCurrentCategory(this.$route.params.id).then((responce) => {
        console.log(responce)
        this.dataCategory = responce.data.category;
        this.createBreadCrumbs()  
      getChildCategories(responce.data.category.id).then((responseChildren) => {
        this.childrenCategories = responseChildren.data.child_category

      });
   
        
      });
    },
    createBreadCrumbs() {
      this.breadcrumbs=[]
      this.breadcrumbs.push(
          {
            text: "Главная",
            path: "/",
          },
          {
            text: this.dataCategory.name,
            path: `/catalog/category/${this.dataCategory.id}`,
          }
        );
    },
  },
  created() {
    this.getCategory();
  },
  watch: {
    $route: function () {
      this.page=1;
      this.paginationCards=[];
      this.getCategory();
      this.getProducts();
  
    },
  },
};
</script>

<template>
  <section class="section-catalog">
    <h1 class="section-catalog__title">{{ dataCategory.name }}</h1>
    <Breadcrumb
      :items="breadcrumbs"
    />
    <div class="container">
      
      <div class="section-catalog__inner">
        <div class="menu-catalog">
          <span> Категории </span>
          <ul class="section-catalog__menu">
            <li class="menu-catalog-main">
              <a href="javascript:void(0)">{{ dataCategory.name }}</a>
               <ul class="menu-catalog-main__children" v-if="childrenCategories.length>0">
                    <li v-for="(child_category,key) of childrenCategories" :key="key"> <router-link :to="'/catalog/category/'+child_category.id">{{child_category.name }}</router-link></li>
                  
                </ul> 
            </li>
          </ul>
        </div>
        <div class="d-flex justyf-content-center text-center mx-auto" v-if="paginationCards.length==0"><p class="text-center">Каталог пуст</p></div>
        <div class="grid-row">
          <!-- Карточка-->

          <router-link
            :to="{ path: '/catalog/' + card.id }"
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
                  <span class="wb-discount__price">{{card.price_discount}} ₽ </span>
                </a>
              </div>
              <div class="cashback d-flex align-items-center">
                <span> Кэшбэк {{card.cashback }} ₽ </span>
                <div class="discount-icon">-{{card.discount}}%</div>
              </div>
            </div>
            <div class="catalog-card__quantity d-flex order-5 order-md-4">
              <span
                >В наличии {{ card.left_count }}/{{
                  card.total_count
                }}
                шт</span
              >
            </div>
            <div class="catalog-card__title order-2 order-md-5">
              <span> {{ card.name }} </span>
            </div>
          </router-link>

          <!-- Конец карточки-->
        </div>
      </div>
    </div>
    <Observer @intersect="intersected"></Observer>
  </section>
</template>
<style scoped>
.menu-catalog-main > a {
  display: block;
  width: 188px;
  padding-top: 12px;
  padding-bottom: 9px;
  padding-left: 30px;
  padding-right: 30px;
  background: #40bfff;
  border-radius: 6px;
  font-weight: 400;
  font-size: 16px;
  color: #ffffff;
  margin-bottom: 20px;
}
.section-catalog__inner {
  display: flex;
}

.menu-catalog {
  padding-right: 30px;
  width: max-content;
}
.menu-catalog span {
  font-family: "Inter";
  display: block;
  font-weight: 600;
  font-size: 16px;
  margin-bottom: 12px;
}
.menu-catalog-main__children li a {
  font-weight: 400;
  color: #223263;
  font-size: 16px;
  padding-left: 26px;
}
.menu-catalog ul li:not(:last-child) {
  margin-bottom: 16px;
}

.grid-row {
  display: grid;
  flex-grow: 1;
  justify-content: space-between;
  row-gap: 50px;
  grid-template-columns: repeat(auto-fill, minmax(223px, 223px));
}
.section-catalog__title {
  margin-bottom: 30px;
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
.grid-row a {
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
@media (max-width: 767.8px) {
  .grid-row {
    grid-template-columns: repeat(auto-fit, minmax(156px, 1fr));
    gap: 22px;
  }
  .catalog-card__image-wrapper {
    width: 100%;
    aspect-ratio: 156/208;
    margin-bottom: 12px;
  }
  .section-catalog {
    padding-top: 124px;
    padding-bottom: 23px;
  }
}
</style>
