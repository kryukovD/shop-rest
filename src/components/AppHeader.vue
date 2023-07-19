<script>
import { getCategories, getCategoryById } from "../api.js"
import { ref } from "vue";
export default {
  data() {
    return {
      categories: [],
      childrenCategories: [],
      isActiveMenu: false,
      activeEl: 0,
      isOpenSearchFilter: false,
      filter: {
        price: 0,
      },
      user:null
    };
  },
  setup() {
    const menu = ref(null);
    return {
      menu,
    };
  },
  created() {
    getCategories().then((responce) => {
      this.categories = responce.data.data
    })
     
  },
  mounted: function () {
    const div = document.querySelector(".menu-dropdown-catalog");
    document.addEventListener("click", (e) => {
      const withinBoundaries = e.composedPath().includes(div);
      if (!withinBoundaries) {
        this.isActiveMenu = false;
        this.activeEl = false;
      }
    });
    this.user=this.$route.params.user;
    console.log(this.$route.params.user);
   
  },
  methods: {
    getChildrenCategories(id) {
      getCategoryById(id).then((response) => {
        this.childrenCategories = response.data.child_category
      });
    },
    changeUser(){
      
    }
  },
  watch: {
    isOpenSearchFilter() {
      if (this.isOpenSearchFilter) {
        document.querySelector(".menu-dropdown-catalog").style.overflow = "hidden"
      }
    },
    $route: function() {
      this.user=this.$route.params.user;
    }
   
  }
};
</script>
<template>
  <header>
    <div class="container">
      <div class="d-flex header__inner flex-wrap flex-lg-nowrap align-items-center justify-content-between">
        <div class="menu">
          <svg @click.stop="isActiveMenu = !isActiveMenu" class="menu-icon d-none d-md-block" width="48" height="48"
            viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.5" y="0.5" width="47" height="47" rx="7.5" fill="#1D9FF8" />
            <rect x="11" y="13.5" width="26" height="3" rx="1.5" fill="white" />
            <rect x="11" y="22.5" width="26" height="3" rx="1.5" fill="white" />
            <rect x="11" y="31.5" width="26" height="3" rx="1.5" fill="white" />
            <rect x="0.5" y="0.5" width="47" height="47" rx="7.5" stroke="#1D9FF8" />
          </svg>
          <!-- Кнопка для мобильного меню-->
          <svg @click.stop="isActiveMenu = !isActiveMenu" class="d-md-none menu-icon" width="32" height="12"
            viewBox="0 0 32 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="32" height="3" fill="#223263" />
            <rect y="7" width="32" height="3" fill="#223263" />
          </svg>

          <div class="menu-dropdown-catalog" :class="{ 'menu-dropdown-catalog_active': isActiveMenu }">
            <!-- Мобильный search-->
            <div class="menu-drop-mobile__search d-md-none">
              <form class="form-search" v-if="activeEl == 0">
                <div class="input-wrap">
                  <input @click="isOpenSearchFilter = true" class="input-search flex-grow-1" placeholder="Искать товары"
                    type="text" />
                </div>
                <div class="input-wrap-submit-search">
                  <button type="submit">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M7.25 3C4.90279 3 3 4.90279 3 7.25C3 9.59721 4.90279 11.5 7.25 11.5C9.59721 11.5 11.5 9.59721 11.5 7.25C11.5 4.90279 9.59721 3 7.25 3ZM1 7.25C1 3.79822 3.79822 1 7.25 1C10.7018 1 13.5 3.79822 13.5 7.25C13.5 10.7018 10.7018 13.5 7.25 13.5C3.79822 13.5 1 10.7018 1 7.25Z"
                        fill="#1D9FF8" />
                      <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M10.2929 10.2929C10.6834 9.90237 11.3166 9.90237 11.7071 10.2929L14.7071 13.2929C15.0976 13.6834 15.0976 14.3166 14.7071 14.7071C14.3166 15.0976 13.6834 15.0976 13.2929 14.7071L10.2929 11.7071C9.90237 11.3166 9.90237 10.6834 10.2929 10.2929Z"
                        fill="#1D9FF8" />
                    </svg>
                  </button>
                </div>
              </form>
              <div @click.stop="activeEl = 0" v-else>
                <svg class="back-mobile-menu" width="8" height="14" viewBox="0 0 8 14" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 13L1 7L7 1" stroke="#9098B1" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round" />
                </svg>
              </div>
            </div>
            <!---Конец Мобильный Search-->

            <!-- Выпадающее менб для мобильного  фильтра seach-->
            <div class="search-form-filters" :class="{ 'search-form-filters_active': isOpenSearchFilter }">
              <div class="search-form-filters__inner">
                <div class="search-form-filters__title d-flex align-items-center">
                  <svg class="closeFilterSearch" @click="isOpenSearchFilter = false" width="24" height="24"
                    viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.9498 7.05029L7.05027 16.9498" stroke="#9098B1" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round" />
                    <path d="M7.05023 7.05029L16.9497 16.9498" stroke="#9098B1" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round" />
                  </svg>
                  Закрыть фильтр
                </div>
                <form class="search-form-filters__filter">
                  <label for="customRange1" class="form-label">Цена : {{ filter.price }}</label>
                  <input type="range" v-model="filter.price" class="form-range" min="0" max="10000" id="customRange1" />
                  <div class="row-filter_wrapper">
                    <div class="row-filter_wrapper-title">Категория</div>
                    <div class="d-flex row-filter flex-wrap">
                      <div class="search-form-filter__item">
                        <input type="checkbox" id="f1" />
                        <label for="f1"> Для женщин </label>

                      </div>

                      <div class="search-form-filter__item">
                        <input type="checkbox" id="f2" />
                        <label for="f2">Для мужчин</label>
                      </div>

                      <div class="search-form-filter__item">
                        <input type="checkbox" id="f3" />
                        <label for="f3"> Для детей </label>

                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <!-- Конец search form-->
            <div class="menu-dropwdown-catalog-wrapper">
              <ul class="category-menu" ref="menu">
                <li class="d-flex" @click.stop="
                  activeEl = key + 1;
                isOpenChildMenu = true, getChildrenCategories(category.id);
                " :class="{ active: activeEl == key + 1 }" v-for="(category, key) of categories" :key="key">
                  {{ category.name }}
                  <ul class="dropdown-lvl-1" :class="{ 'dropdown-lvl-1_active': activeEl == key + 1 }">
                    <li class="dropdown-lvl-1__title">
                      <router-link @click.stop="isActiveMenu = false; activeEl = 0"
                        :to="'/catalog/category/' + category.id">{{ category.name }}</router-link>
                    </li>

                    <li v-for="(childrenCategory, keyChildren) of childrenCategories" :key="keyChildren"
                      class="dropdown-lvl-1__title">
                      <router-link @click.stop="isActiveMenu = false; activeEl = 0"
                        :to="'/catalog/category/' + childrenCategory.id">{{ childrenCategory.name }}</router-link>
                    </li>

                    <!-- <li class="dropdown-lvl-1__title">
                      <router-link to="/catalog">Блузки и рубашки</router-link>
                    </li>
                    <li class="dropdown-lvl-1__title">
                      <router-link to="/catalog">Брюки</router-link>
                    </li>
                    <li class="dropdown-lvl-1__title">
                      <router-link to="/catalog">Верхняя одежда</router-link>
                    </li>
                    <li class="dropdown-lvl-1__title">
                      <router-link to="/catalog">Джинсы</router-link>
                    </li>
                    <li class="dropdown-lvl-1__title">
                      <router-link to="/catalog">Костюмы</router-link>
                    </li>
                    <li class="dropdown-lvl-1__title">
                      <router-link to="/catalog">Лонгсливы</router-link>
                    </li>
                    <li class="dropdown-lvl-1__title">
                      <router-link to="/catalog">Толстовки</router-link>
                    </li>
                    <li class="dropdown-lvl-1__title">
                      <router-link to="/catalog">Блузки и рубашки</router-link>
                    </li>
                    <li class="dropdown-lvl-1__title">
                      <router-link to="/catalog">Брюки</router-link>
                    </li>
                    <li class="dropdown-lvl-1__title">
                      <router-link to="/catalog">Верхняя одежда</router-link>
                    </li>
                    <li class="dropdown-lvl-1__title">
                      <router-link to="/catalog">Джинсы</router-link>
                    </li>
                    <li class="dropdown-lvl-1__title">
                      <router-link to="/catalog">Костюмы</router-link>
                    </li>
                    <li class="dropdown-lvl-1__title">
                      <router-link to="/catalog"> Лонгсливы</router-link>
                    </li>
                    <li class="dropdown-lvl-1__title">
                      <router-link to="/catalog">Толстовки</router-link>
                    </li> -->
                  </ul>
                </li>

              </ul>

            </div>
          </div>
        </div>
        <div class="menu__logo">
          <router-link to="/">
            <div class="logo d-flex align-items-center justify-content-center">
              Лого
            </div>
          </router-link>
        </div>

        <router-link
          class="d-flex d-md-none flex-column navgation-ui__link link-notification link-notification_active align-items-center"
          to="/notifications">
          <svg width="18" height="21" viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M8.87501 2.65723C5.54379 2.65723 2.84376 5.35726 2.84376 8.68848V13.9389C2.84376 14.0543 2.82375 14.169 2.78463 14.2776L2.42291 15.2822H15.3271L14.9654 14.2776C14.9263 14.169 14.9063 14.0543 14.9063 13.9389V8.68848C14.9063 5.35726 12.2062 2.65723 8.87501 2.65723ZM0.843756 8.68848C0.843756 4.25269 4.43922 0.657227 8.87501 0.657227C13.3108 0.657227 16.9063 4.25269 16.9063 8.68848V13.7643L17.6909 15.9435C17.8012 16.2499 17.7554 16.5908 17.5682 16.8572C17.3809 17.1237 17.0757 17.2822 16.75 17.2822H1.00001C0.674353 17.2822 0.369096 17.1237 0.181848 16.8572C-0.00540075 16.5908 -0.0511846 16.2499 0.0591362 15.9435L0.843756 13.7643V8.68848Z"
              fill="#223263" />
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M5.5 15.2822C6.05228 15.2822 6.5 15.7299 6.5 16.2822C6.5 17.5941 7.56316 18.6572 8.875 18.6572C10.1868 18.6572 11.25 17.5941 11.25 16.2822C11.25 15.7299 11.6977 15.2822 12.25 15.2822C12.8023 15.2822 13.25 15.7299 13.25 16.2822C13.25 18.6986 11.2914 20.6572 8.875 20.6572C6.45859 20.6572 4.5 18.6986 4.5 16.2822C4.5 15.7299 4.94772 15.2822 5.5 15.2822Z"
              fill="#223263" />
          </svg>
        </router-link>
        <!-- Поиск-->
        <div class="search menu__search order-md-4 order-lg-0">
          <form class="form-search">
            <div class="input-wrap">
              <input class="input-search flex-grow-1" placeholder="Искать товары" type="text" />
            </div>
            <div class="input-wrap-submit-search">
              <button type="submit">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M7.25 3C4.90279 3 3 4.90279 3 7.25C3 9.59721 4.90279 11.5 7.25 11.5C9.59721 11.5 11.5 9.59721 11.5 7.25C11.5 4.90279 9.59721 3 7.25 3ZM1 7.25C1 3.79822 3.79822 1 7.25 1C10.7018 1 13.5 3.79822 13.5 7.25C13.5 10.7018 10.7018 13.5 7.25 13.5C3.79822 13.5 1 10.7018 1 7.25Z"
                    fill="#1D9FF8" />
                  <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M10.2929 10.2929C10.6834 9.90237 11.3166 9.90237 11.7071 10.2929L14.7071 13.2929C15.0976 13.6834 15.0976 14.3166 14.7071 14.7071C14.3166 15.0976 13.6834 15.0976 13.2929 14.7071L10.2929 11.7071C9.90237 11.3166 9.90237 10.6834 10.2929 10.2929Z"
                    fill="#1D9FF8" />
                </svg>
              </button>
            </div>
          </form>
        </div>
        <!-- Конец поиска-->
        <div class="navigation-ui d-none d-md-block">
          <ul class="d-flex ui-list">
            <li>
              <router-link class="d-flex flex-column navgation-ui__link align-items-center" to="/favorites">
                <svg class="" width="23" height="20" viewBox="0 0 23 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M3.25465 10.8657L11.5003 19L19.746 10.8657L19.7905 10.8217C22.0698 8.57325 22.0698 4.93487 19.7905 2.68742C17.5113 0.439968 13.8231 0.438922 11.5449 2.68742L11.5003 2.73134L11.4547 2.68637C9.17547 0.437876 5.48728 0.437876 3.20906 2.68637C0.930843 4.93487 0.929783 8.57325 3.20906 10.8207L3.25465 10.8657Z"
                    stroke="#223263" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                Избранное
              </router-link>
            </li>

            <li>
              <router-link class="d-flex flex-column navgation-ui__link align-items-center" to="/chats">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <mask id="path-1-inside-1_1_899" fill="white">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M3.3475 14.8675C3.47725 14.9977 3.57667 15.155 3.63868 15.3281C3.70069 15.5011 3.72376 15.6857 3.70625 15.8687C3.6184 16.7157 3.45185 17.5527 3.20875 18.3687C4.9525 17.965 6.0175 17.4975 6.50125 17.2525C6.77563 17.1135 7.09161 17.0806 7.38875 17.16C8.24054 17.3871 9.11846 17.5014 10 17.5C14.995 17.5 18.75 13.9913 18.75 10C18.75 6.01 14.995 2.5 10 2.5C5.005 2.5 1.25 6.01 1.25 10C1.25 11.835 2.02125 13.5375 3.3475 14.8675ZM2.73125 19.7487C2.43509 19.8075 2.13796 19.8612 1.84 19.91C1.59 19.95 1.4 19.69 1.49875 19.4575C1.60974 19.1957 1.71147 18.9302 1.80375 18.6612L1.8075 18.6488C2.1175 17.7487 2.37 16.7138 2.4625 15.75C0.92875 14.2125 0 12.2 0 10C0 5.1675 4.4775 1.25 10 1.25C15.5225 1.25 20 5.1675 20 10C20 14.8325 15.5225 18.75 10 18.75C9.00956 18.7513 8.02323 18.6227 7.06625 18.3675C6.41625 18.6963 5.0175 19.295 2.73125 19.7487Z" />
                  </mask>
                  <path
                    d="M3.3475 14.8675L5.47286 12.7502L5.47181 12.7492L3.3475 14.8675ZM3.70625 15.8687L6.69024 16.1783L6.69147 16.1664L6.69261 16.1545L3.70625 15.8687ZM3.20875 18.3687L0.333601 17.5123L-1.13866 22.4547L3.88547 21.2914L3.20875 18.3687ZM6.50125 17.2525L7.8567 19.9288L7.85676 19.9288L6.50125 17.2525ZM7.38875 17.16L6.61426 20.0583L6.61595 20.0588L7.38875 17.16ZM10 17.5V14.5L9.99525 14.5L10 17.5ZM1.84 19.91L2.31397 22.8723L2.3247 22.8706L1.84 19.91ZM1.49875 19.4575L4.26001 20.6303L4.26071 20.6286L1.49875 19.4575ZM1.80375 18.6612L4.64133 19.635L4.66037 19.5795L4.67723 19.5233L1.80375 18.6612ZM1.8075 18.6488L-1.02895 17.6717L-1.04863 17.7289L-1.06598 17.7867L1.8075 18.6488ZM2.4625 15.75L5.44878 16.0366L5.58369 14.631L4.58641 13.6313L2.4625 15.75ZM10 18.75V15.75L9.99596 15.75L10 18.75ZM7.06625 18.3675L7.83936 15.4688L6.73354 15.1739L5.71227 15.6904L7.06625 18.3675ZM1.22214 16.9848C1.04049 16.8024 0.901303 16.5823 0.81449 16.34L6.46286 14.3162C6.25203 13.7277 5.914 13.1931 5.47286 12.7502L1.22214 16.9848ZM0.81449 16.34C0.727676 16.0977 0.695374 15.8392 0.719888 15.583L6.69261 16.1545C6.75214 15.5323 6.6737 14.9046 6.46286 14.3162L0.81449 16.34ZM0.722259 15.5592C0.653627 16.2209 0.523513 16.8748 0.333601 17.5123L6.0839 19.2252C6.38018 18.2306 6.58317 17.2105 6.69024 16.1783L0.722259 15.5592ZM3.88547 21.2914C5.86629 20.8328 7.15905 20.2822 7.8567 19.9288L5.1458 14.5762C4.87595 14.7128 4.03871 15.0972 2.53203 15.4461L3.88547 21.2914ZM7.85676 19.9288C7.47263 20.1234 7.03025 20.1695 6.61426 20.0583L8.16324 14.2617C7.15297 13.9917 6.07863 14.1037 5.14574 14.5762L7.85676 19.9288ZM6.61595 20.0588C7.72138 20.3535 8.86071 20.5018 10.0047 20.5L9.99525 14.5C9.37621 14.501 8.75971 14.4207 8.16155 14.2612L6.61595 20.0588ZM10 20.5C16.2812 20.5 21.75 15.9959 21.75 10H15.75C15.75 11.9866 13.7088 14.5 10 14.5V20.5ZM21.75 10C21.75 4.00563 16.2815 -0.5 10 -0.5V5.5C13.7085 5.5 15.75 8.01437 15.75 10H21.75ZM10 -0.5C3.71846 -0.5 -1.75 4.00563 -1.75 10H4.25C4.25 8.01437 6.29154 5.5 10 5.5V-0.5ZM-1.75 10C-1.75 12.7124 -0.602207 15.1553 1.22319 16.9858L5.47181 12.7492C4.64471 11.9197 4.25 10.9576 4.25 10H-1.75ZM2.14789 16.806C1.88451 16.8582 1.62027 16.906 1.3553 16.9494L2.3247 22.8706C2.65565 22.8164 2.98567 22.7567 3.31461 22.6915L2.14789 16.806ZM1.36603 16.9477C3.63322 16.5849 5.00783 18.8696 4.26001 20.6303L-1.26251 18.2847C-2.20783 20.5104 -0.453224 23.3151 2.31397 22.8723L1.36603 16.9477ZM4.26071 20.6286C4.39922 20.302 4.52617 19.9706 4.64133 19.635L-1.03383 17.6875C-1.10323 17.8898 -1.17974 18.0895 -1.26321 18.2864L4.26071 20.6286ZM4.67723 19.5233L4.68098 19.5108L-1.06598 17.7867L-1.06973 17.7992L4.67723 19.5233ZM4.64395 19.6257C5.01288 18.5547 5.32896 17.285 5.44878 16.0366L-0.523777 15.4634C-0.588962 16.1425 -0.777882 16.9428 -1.02895 17.6717L4.64395 19.6257ZM4.58641 13.6313C3.55172 12.5941 3 11.322 3 10H-3C-3 13.078 -1.69422 15.8309 0.338591 17.8687L4.58641 13.6313ZM3 10C3 7.18818 5.74546 4.25 10 4.25V-1.75C3.20954 -1.75 -3 3.14682 -3 10H3ZM10 4.25C14.2545 4.25 17 7.18818 17 10H23C23 3.14682 16.7905 -1.75 10 -1.75V4.25ZM17 10C17 12.8118 14.2545 15.75 10 15.75V21.75C16.7905 21.75 23 16.8532 23 10H17ZM9.99596 15.75C9.26789 15.751 8.54284 15.6565 7.83936 15.4688L6.29314 21.2662C7.50363 21.589 8.75124 21.7517 10.004 21.75L9.99596 15.75ZM5.71227 15.6904C5.30416 15.8968 4.16431 16.4058 2.14723 16.8061L3.31527 22.6914C5.87069 22.1842 7.52834 21.4957 8.42023 21.0446L5.71227 15.6904Z"
                    fill="#223263" mask="url(#path-1-inside-1_1_899)" />
                  <path
                    d="M10.1768 10.1768L10.8839 10.8839L10.1768 10.1768ZM10.1768 10.1768C10.1299 10.2237 10.0663 10.25 10 10.25C9.93369 10.25 9.87011 10.2237 9.82322 10.1768M10.1768 10.1768C10.2237 10.1299 10.25 10.0663 10.25 10C10.25 9.9337 10.2237 9.87011 10.1768 9.82322C10.1299 9.77634 10.0663 9.75 10 9.75C9.93369 9.75 9.87011 9.77634 9.82322 9.82322C9.77634 9.87011 9.75 9.9337 9.75 10C9.75 10.0663 9.77634 10.1299 9.82322 10.1768M10.1768 10.1768L10 10L10.1768 10.1768ZM9.82322 10.1768L9.11612 10.8839L9.82322 10.1768ZM4.75 10C4.75 9.9337 4.77634 9.87011 4.82322 9.82322C4.87011 9.77634 4.9337 9.75 5 9.75C5.0663 9.75 5.12989 9.77634 5.17678 9.82322C5.22366 9.87011 5.25 9.9337 5.25 10C5.25 10.0663 5.22366 10.1299 5.17678 10.1768C5.12989 10.2237 5.0663 10.25 5 10.25C4.93369 10.25 4.87011 10.2237 4.82322 10.1768C4.77634 10.1299 4.75 10.0663 4.75 10ZM14.8232 9.82322C14.8701 9.77634 14.9337 9.75 15 9.75C15.0663 9.75 15.1299 9.77634 15.1768 9.82322C15.2237 9.87011 15.25 9.93369 15.25 10C15.25 10.0663 15.2237 10.1299 15.1768 10.1768C15.1299 10.2237 15.0663 10.25 15 10.25C14.9337 10.25 14.8701 10.2237 14.8232 10.1768C14.7763 10.1299 14.75 10.0663 14.75 10C14.75 9.93369 14.7763 9.87011 14.8232 9.82322Z"
                    fill="#223263" stroke="#223263" stroke-width="3" />
                </svg>
                Чаты
              </router-link>
            </li>

            <li>
              <router-link class="d-flex flex-column navgation-ui__link align-items-center" to="/orders">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7.22255 18.8885C7.52937 18.8885 7.7781 18.6397 7.7781 18.3329C7.7781 18.0261 7.52937 17.7773 7.22255 17.7773C6.91572 17.7773 6.66699 18.0261 6.66699 18.3329C6.66699 18.6397 6.91572 18.8885 7.22255 18.8885Z"
                    fill="#223263" stroke="#223263" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"
                    stroke-linejoin="round" />
                  <path
                    d="M14.9999 18.8885C15.3067 18.8885 15.5554 18.6397 15.5554 18.3329C15.5554 18.0261 15.3067 17.7773 14.9999 17.7773C14.6931 17.7773 14.4443 18.0261 14.4443 18.3329C14.4443 18.6397 14.6931 18.8885 14.9999 18.8885Z"
                    fill="#223263" stroke="#223263" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"
                    stroke-linejoin="round" />
                  <path d="M1.11035 1.11133H3.33257L5.5548 14.4447H16.6659L18.8881 4.44466H4.44369" stroke="#223263"
                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>

                Заказы
              </router-link>
            </li>

            <li>
              <router-link class="d-flex flex-column navgation-ui__link align-items-center" to="/profile">
                <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M10.4993 2.00011C8.89631 2.00011 7.59679 3.29963 7.59679 4.90266C7.59679 6.50569 8.89631 7.80521 10.4993 7.80521C12.1024 7.80521 13.4019 6.50569 13.4019 4.90266C13.4019 3.29963 12.1024 2.00011 10.4993 2.00011ZM5.59668 4.90266C5.59668 2.195 7.79168 0 10.4993 0C13.207 0 15.402 2.195 15.402 4.90266C15.402 7.61033 13.207 9.80532 10.4993 9.80532C7.79168 9.80532 5.59668 7.61033 5.59668 4.90266Z"
                    fill="#223263" />
                  <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M8.01779 13.3907C4.97012 13.3907 2.49963 15.8612 2.49963 18.9089V19C2.49963 19.5523 2.05189 20.0001 1.49957 20.0001C0.947253 20.0001 0.499512 19.5523 0.499512 19V18.9089C0.499512 14.7566 3.86549 11.3906 8.01779 11.3906H12.9824C17.1347 11.3906 20.5007 14.7566 20.5007 18.9089V19C20.5007 19.5523 20.0529 20.0001 19.5006 20.0001C18.9483 20.0001 18.5005 19.5523 18.5005 19V18.9089C18.5005 15.8612 16.03 13.3907 12.9824 13.3907H8.01779Z"
                    fill="#223263" />
                </svg>

                Профиль
              </router-link>
            </li>

            <li v-if="user!=null">
              <router-link
                class="d-flex flex-column navgation-ui__link link-notification link-notification_active align-items-center"
                to="/notifications"
              >
                <svg
                  width="18"
                  height="21"
                  viewBox="0 0 18 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8.87501 2.65723C5.54379 2.65723 2.84376 5.35726 2.84376 8.68848V13.9389C2.84376 14.0543 2.82375 14.169 2.78463 14.2776L2.42291 15.2822H15.3271L14.9654 14.2776C14.9263 14.169 14.9063 14.0543 14.9063 13.9389V8.68848C14.9063 5.35726 12.2062 2.65723 8.87501 2.65723ZM0.843756 8.68848C0.843756 4.25269 4.43922 0.657227 8.87501 0.657227C13.3108 0.657227 16.9063 4.25269 16.9063 8.68848V13.7643L17.6909 15.9435C17.8012 16.2499 17.7554 16.5908 17.5682 16.8572C17.3809 17.1237 17.0757 17.2822 16.75 17.2822H1.00001C0.674353 17.2822 0.369096 17.1237 0.181848 16.8572C-0.00540075 16.5908 -0.0511846 16.2499 0.0591362 15.9435L0.843756 13.7643V8.68848Z"
                    fill="#223263"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M5.5 15.2822C6.05228 15.2822 6.5 15.7299 6.5 16.2822C6.5 17.5941 7.56316 18.6572 8.875 18.6572C10.1868 18.6572 11.25 17.5941 11.25 16.2822C11.25 15.7299 11.6977 15.2822 12.25 15.2822C12.8023 15.2822 13.25 15.7299 13.25 16.2822C13.25 18.6986 11.2914 20.6572 8.875 20.6572C6.45859 20.6572 4.5 18.6986 4.5 16.2822C4.5 15.7299 4.94772 15.2822 5.5 15.2822Z"
                    fill="#223263"
                  />
                </svg>
              </router-link>
            </li>

            <li v-else-if="user==null" >
              <router-link
                class="d-flex flex-column navgation-ui__link link-notification  align-items-center"
                to="/signIn">
                <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M10.0003 2.00011C8.39729 2.00011 7.09777 3.29963 7.09777 4.90266C7.09777 6.50569 8.39729 7.80521 10.0003 7.80521C11.6034 7.80521 12.9029 6.50569 12.9029 4.90266C12.9029 3.29963 11.6034 2.00011 10.0003 2.00011ZM5.09766 4.90266C5.09766 2.195 7.29265 0 10.0003 0C12.708 0 14.903 2.195 14.903 4.90266C14.903 7.61033 12.708 9.80532 10.0003 9.80532C7.29265 9.80532 5.09766 7.61033 5.09766 4.90266Z"
                    fill="#223263" />
                  <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M7.51827 13.3906C4.47061 13.3906 2.00011 15.8611 2.00011 18.9088V18.9999C2.00011 19.5522 1.55237 20 1.00006 20C0.447741 20 0 19.5522 0 18.9999V18.9088C0 14.7565 3.36598 11.3905 7.51827 11.3905H12.4829C16.6352 11.3905 20.0011 14.7565 20.0011 18.9088V18.9999C20.0011 19.5522 19.5534 20 19.0011 20C18.4488 20 18.001 19.5522 18.001 18.9999V18.9088C18.001 15.8611 15.5305 13.3906 12.4829 13.3906H7.51827Z"
                    fill="#223263" />
                </svg>
                Войти
              </router-link>
            </li>

          </ul>

        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
header {
  border-bottom: 1px solid #ebf0ff;
}

.search.menu__search {
  flex-basis: 543px;
  z-index: 1;
}

.menu__logo a {
  color: #223263;
}

.menu-icon:hover {
  cursor: pointer;
}

.header__inner {
  padding: 16px 0px;
  font-weight: 600;
  gap: 12px;
}

.input-search {
  border: 1.5px solid #ebf0ff;
  border-image-source: linear-gradient(0deg, #ebf0ff, #ebf0ff),
    linear-gradient(0deg, #ebf0ff, #ebf0ff);
  padding-top: 11.5px;
  padding-bottom: 11.5px;
  padding-left: 40px;
  position: relative;
  line-height: 25.5px;
  color: #9098b1;
  border-radius: 8px;
  outline: none;
}

.input-wrap {
  display: flex;
  flex-grow: 1;
  max-width: 543px;

  position: relative;
}

.input-wrap-submit-search button {
  background: transparent;
  border: none;
  padding: 0px;
}

.input-wrap-submit-search {
  position: absolute;
  top: 48%;
  left: 17px;
  transform: translateY(-50%);
}

.form-search {
  position: relative;
}

a {
  text-decoration: none;
}

.navgation-ui__link {
  gap: 8px;
}

ul {
  margin: 0px;
  padding: 0px;
  list-style: none;
}

.ui-list {
  gap: 36px;
}

.link-notification {
  position: relative;
}

.link-notification_active::after {
  content: "";
  position: absolute;
  width: 10px;
  height: 10px;
  right: 0px;
  top: 0px;
  background: #fb7181;
  border-radius: 50%;
}

.menu-dropdown-catalog {
  position: fixed;
  height: 100vh;
  top: 0px;
  left: 0px;
  transform: translateX(-100%);
  transition: 0.3s ease-in-out;
  background: white;
  font-size: 16px;
  line-height: 20px;
  padding-bottom: 14px;
  z-index: 1000;
}

::-webkit-scrollbar {
  background: #9098b1;
  width: 4px;
}

.category-menu li {
  padding-top: 14px;
  padding-bottom: 14px;
  padding-left: 26px;
}

.category-menu {
  padding-top: 30px;
  width: 291px;
  overflow-x: hidden;
  /* прокрутка по горизонтали */
  overflow-y: scroll;
  /* прокрутка по вертикали */
  height: 100vh;
}

.category-menu li {
  cursor: pointer;
}

.category-menu li.active {
  background: #40bfff;
  color: white;
}

.menu-dropdown-catalog_active {
  transform: translateX(0px);
}

.dropdown-lvl-1 {
  display: none;
  padding-top: 44px;
  z-index: 1000;
  padding-left: 21px;
  padding-right: 121px;
  height: 100vh;
}

.dropdown-lvl-1 a {
  color: #9098b1;
  font-size: 16px;
  line-height: 19.3px;
  font-weight: 400;
}

.dropdown-lvl-1 li:first-child a {
  color: #40bfff;
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 20px;
  line-height: 21.78px;
}

.dropdown-lvl-1 li {
  width: max-content;
}

.dropdown-lvl-1 li {
  padding: 0px;
  margin-bottom: 16px;
}

.dropdown-lvl-1_active {
  display: block;
  position: absolute;
  top: 0px;
  background: white;
  left: 100%;
}

.menu-dropwdown-catalog-wrapper {
  position: relative;
}

.menu-drop-mobile__search {
  padding-top: 30px;
  padding-left: 20px;
  padding-right: 20px;
}

.search-form-filters {
  display: none;
}

@media (max-width: 1399.8px) {
  .search.menu__search {
    flex-basis: fit-content;
  }
}

@media (max-width: 767.8px) {
  header {
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
    z-index: 100;
    background: white;
  }

  .row-filter {
    gap: 9px;
  }

  .search.menu__search {
    flex-basis: 100%;
  }

  .menu-dropdown-catalog {
    width: 100vw;
    height: calc(100% - 67px);
    overflow-x: hidden;
    overflow-y: scroll;
  }

  .category-menu {
    font-family: "Inter";
    padding-top: 30px;
    width: 100vw;
    overflow-x: hidden;
    overflow-y: scroll;
    font-size: 14px;
    line-height: 16.8px;
    height: 100vh;
    font-weight: 500;
    color: #223263;
  }

  .category-menu li:not(:last-child) {
    border-bottom: 1px solid #ebf0ff;
  }

  .category-menu>li {
    padding-top: 16px;
    padding-bottom: 16px;
    padding-left: 20px;
  }

  .dropdown-lvl-1_active {
    top: 0px;
    right: 0px;
    left: 0;
    bottom: 0px;
  }

  .back-mobile-menu {
    cursor: pointer;
  }

  .dropdown-lvl-1 li a {
    font-size: 12px;
    color: #9098b1;
  }

  .dropdown-lvl-1 li {
    margin-bottom: 14px;
  }

  .dropdown-lvl-1 li:not(:last-child) {
    border: unset;
  }

  .dropdown-lvl-1 .dropdown-lvl-1__title {
    font-size: 12px;
  }

  .dropdown-lvl-1 li:first-child a {
    font-family: "Poppers";
    font-weight: 600;
    margin-bottom: 14px;
  }

  .search-form-filters_active {
    display: block;
    position: fixed;
    left: 0px;
    right: 0px;
    top: 0px;
    width: 100vw;
    height: 100vh;
    background: white;
    z-index: 1001;
  }

  .search-form-filters__inner {
    padding-left: 11px;
    padding-right: 11px;
  }

  .search-form-filters__title {
    padding-top: 26px;
    padding-bottom: 28px;
    gap: 17px;
  }

  .search-form-filters__filter label {
    font-family: "Poppins";
    font-size: 14px;
    margin-bottom: 12px;

  }

  .search-form-filter__item input[type="checkbox"] {
    display: none;
  }

  .search-form-filter__item label {
    font-family: "Poppins";
    font-weight: 400;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    width: max-content;
    padding: 16px;
    font-size: 12px;
    border-radius: 5px;
    border: 1px solid;
    line-height: 24px;
    font-size: 12px;
    background: white;
    color: #9098B1;
    border-radius: 4px;
    border: 1px solid #A8A8A8;
    border-radius: 4px;
    user-select: none;
    transition: 0.3s ease;
  }

  .search-form-filter__item input[type=checkbox]:checked+label {
    background: #40BFFF1A;
    color: #40BFFF;
    border-color: #40BFFF;
    font-weight: 700;
  }


  .row-filter_wrapper-title {
    font-family: "Poppins";
    font-size: 14px;
    font-weight: 700;
    margin-bottom: 12px;
  }

  .closeFilterSearch {
    cursor: pointer;
  }
}

@media (min-width: 768px) and (max-width:991.8px) {
  .search.menu__search {
    flex-basis: 100%;
  }

  .input-wrap {
    max-width: 100%;
  }
}
</style>
