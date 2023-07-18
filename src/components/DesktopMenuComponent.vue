
<script>
import { getCategories } from "../api";
export default {
  data() {
    return {
      isActiveMenu: false,
      activeEl: 0,
      filter: {
        price: 0,
      },
      categories: [],
    };
  },
  created() {
    getCategories().then((responce) => {
      this.categories = responce.data.categories.data;
    });
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
  },
  watch:{
    isOpenSearchFilter(){
      if(this.isOpenSearchFilter){
        document.querySelector(".menu-dropdown-catalog").style.overflow="hidden"
      }
    }
  }
};
</script>
<template>
   <div class="menu">
          <svg
            @click.stop="isActiveMenu = !isActiveMenu"
            class="menu-icon d-none d-md-block"
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.5"
              y="0.5"
              width="47"
              height="47"
              rx="7.5"
              fill="#1D9FF8"
            />
            <rect x="11" y="13.5" width="26" height="3" rx="1.5" fill="white" />
            <rect x="11" y="22.5" width="26" height="3" rx="1.5" fill="white" />
            <rect x="11" y="31.5" width="26" height="3" rx="1.5" fill="white" />
            <rect
              x="0.5"
              y="0.5"
              width="47"
              height="47"
              rx="7.5"
              stroke="#1D9FF8"
            />
          </svg>
          <!-- Кнопка для мобильного меню-->
          <svg
            @click.stop="isActiveMenu = !isActiveMenu"
            class="d-md-none menu-icon"
            width="32"
            height="12"
            viewBox="0 0 32 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="32" height="3" fill="#223263" />
            <rect y="7" width="32" height="3" fill="#223263" />
          </svg>

          <div
            class="menu-dropdown-catalog"
            :class="{ 'menu-dropdown-catalog_active': isActiveMenu }"
          >
            <!-- Мобильный search-->
            <div class="menu-drop-mobile__search d-md-none">
              <form class="form-search" v-if="activeEl == 0">
                <div class="input-wrap">
                  <input
                    @click="isOpenSearchFilter = true"
                    class="input-search flex-grow-1"
                    placeholder="Искать товары"
                    type="text"
                  />
                </div>
                <div class="input-wrap-submit-search">
                  <button type="submit">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M7.25 3C4.90279 3 3 4.90279 3 7.25C3 9.59721 4.90279 11.5 7.25 11.5C9.59721 11.5 11.5 9.59721 11.5 7.25C11.5 4.90279 9.59721 3 7.25 3ZM1 7.25C1 3.79822 3.79822 1 7.25 1C10.7018 1 13.5 3.79822 13.5 7.25C13.5 10.7018 10.7018 13.5 7.25 13.5C3.79822 13.5 1 10.7018 1 7.25Z"
                        fill="#1D9FF8"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M10.2929 10.2929C10.6834 9.90237 11.3166 9.90237 11.7071 10.2929L14.7071 13.2929C15.0976 13.6834 15.0976 14.3166 14.7071 14.7071C14.3166 15.0976 13.6834 15.0976 13.2929 14.7071L10.2929 11.7071C9.90237 11.3166 9.90237 10.6834 10.2929 10.2929Z"
                        fill="#1D9FF8"
                      />
                    </svg>
                  </button>
                </div>
              </form>
              <div @click.stop="activeEl = 0" v-else>
                <svg
                  class="back-mobile-menu"
                  width="8"
                  height="14"
                  viewBox="0 0 8 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 13L1 7L7 1"
                    stroke="#9098B1"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>
            <!---Конец Мобильный Search-->

            <!-- Выпадающее менб для мобильного  фильтра seach-->
            <div
              class="search-form-filters"
              :class="{ 'search-form-filters_active': isOpenSearchFilter }"
            >
              <div class="search-form-filters__inner">
                <div
                  class="search-form-filters__title d-flex align-items-center"
                >
                  <svg class="closeFilterSearch" @click="isOpenSearchFilter=false"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.9498 7.05029L7.05027 16.9498"
                      stroke="#9098B1"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M7.05023 7.05029L16.9497 16.9498"
                      stroke="#9098B1"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  Закрыть фильтр
                </div>
                <form class="search-form-filters__filter">
                  <label for="customRange1" class="form-label"
                    >Цена : {{ filter.price }}</label
                  >
                  <input
                    type="range"
                    v-model="filter.price"
                    class="form-range"
                    min="0"
                    max="10000"
                    id="customRange1"
                  />
                  <div class="row-filter_wrapper">
                    <div class="row-filter_wrapper-title">Категория</div>
                  <div class="d-flex row-filter flex-wrap">
                    <div class="search-form-filter__item">
                      <input type="checkbox" id="f1" />
                      <label for="f1"> Для женщин  </label>
            
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
                <li
                  class="d-flex"
                  @click.stop="
                    activeEl = 1;
                    isOpenChildMenu = true;
                  "
                  :class="{ active: activeEl == 1 }"
                >
                  Женщинам
                  <ul
                    class="dropdown-lvl-1"
                    :class="{ 'dropdown-lvl-1_active': activeEl == 1 }"
                  >
                    <li class="dropdown-lvl-1__title">
                      <router-link to="/catalog/category/woman">Женщинам</router-link>
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
                    </li>
                  </ul>
                </li>
                <li
                  class="d-flex"
                  @click.stop="activeEl = 2"
                  :class="{ active: activeEl == 2 }"
                >
                  Обувь
                </li>
                <li
                  class="d-flex"
                  @click.stop="activeEl = 3"
                  :class="{ active: activeEl == 3 }"
                >
                  Детям
                </li>
                <li
                  class="d-flex"
                  @click.stop="activeEl = 4"
                  :class="{ active: activeEl == 4 }"
                >
                  Мужчины
                </li>
                <li
                  class="d-flex"
                  @click.stop="activeEl = 5"
                  :class="{ active: activeEl == 5 }"
                >
                  Красота
                </li>
                <li
                  class="d-flex"
                  @click.stop="activeEl = 6"
                  :class="{ active: activeEl == 6 }"
                >
                  Женщинам
                </li>
                <li
                  class="d-flex"
                  @click.stop="activeEl = 7"
                  :class="{ active: activeEl == 7 }"
                >
                  Обувь
                </li>
                <li
                  class="d-flex"
                  @click.stop="activeEl = 8"
                  :class="{ active: activeEl == 8 }"
                >
                  Детям
                </li>
                <li
                  class="d-flex"
                  @click.stop="activeEl = 9"
                  :class="{ active: activeEl == 9 }"
                >
                  Мужчины
                </li>
                <li
                  class="d-flex"
                  @click.stop="activeEl = 10"
                  :class="{ active: activeEl == 10 }"
                >
                  Аксессуары
                </li>
                <li
                  class="d-flex"
                  @click.stop="activeEl = 11"
                  :class="{ active: activeEl == 11 }"
                >
                  Элекроника
                </li>
                <li
                  class="d-flex"
                  @click.stop="activeEl = 12"
                  :class="{ active: activeEl == 12 }"
                >
                  Игрушки
                </li>
                <li
                  class="d-flex"
                  @click.stop="activeEl = 13"
                  :class="{ active: activeEl == 13 }"
                >
                  Мебель
                </li>
                <li
                  class="d-flex"
                  @click.stop="activeEl = 14"
                  :class="{ active: activeEl == 14 }"
                >
                  Продукты
                </li>
                <li
                  class="d-flex"
                  @click.stop="activeEl = 15"
                  :class="{ active: activeEl == 15 }"
                >
                  Бытовая техника
                </li>
                <li
                  class="d-flex"
                  @click.stop="activeEl = 16"
                  :class="{ active: activeEl == 16 }"
                >
                  Зоотовары
                </li>
                <li
                  class="d-flex"
                  @click.stop="activeEl = 17"
                  :class="{ active: activeEl == 17 }"
                >
                  Спорт
                </li>
                <li
                  class="d-flex"
                  @click.stop="activeEl = 18"
                  :class="{ active: activeEl == 18 }"
                >
                  Автовары
                </li>
                <li
                  class="d-flex"
                  @click.stop="activeEl = 19"
                  :class="{ active: activeEl == 19 }"
                >
                  Для ремонта
                </li>
                <li
                  class="d-flex"
                  @click.stop="activeEl = 20"
                  :class="{ active: activeEl == 20 }"
                >
                  Сад и дача
                </li>
                <li
                  class="d-flex"
                  @click.stop="activeEl = 21"
                  :class="{ active: activeEl == 21 }"
                >
                  Здоровье
                </li>
              </ul>
            </div>
          </div>
        </div>
</template>

<style scoped>
.menu-icon:hover {
  cursor: pointer;
}
.category-menu li {
  padding-top: 14px;
  padding-bottom: 14px;
  padding-left: 26px;
}
.category-menu {
  padding-top: 30px;
  width: 291px;
  overflow-x: hidden; /* прокрутка по горизонтали */
  overflow-y: scroll; /* прокрутка по вертикали */
  height: 100vh;
}
.category-menu li {
  cursor: pointer;
}
.category-menu li.active {
  background: #40bfff;
  color: white;
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
  .category-menu > li {
    padding-top: 16px;
    padding-bottom: 16px;
    padding-left: 20px;
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
  .search-form-filters__inner{
    padding-left: 11px;
    padding-right: 11px;
  }
  .search-form-filters__title{
    padding-top: 26px;
    padding-bottom: 28px;
    gap: 17px;
  }
  .search-form-filters__filter label{
    font-family: "Poppins";
    font-size: 14px;
    margin-bottom: 12px;

  }
 
.search-form-filter__item  input[type="checkbox"]{
  display: none;
}
.search-form-filter__item label{
    font-family: "Poppins";
    font-weight: 400;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    width: max-content;
    padding:16px;
    font-size: 12px;
    border-radius: 5px;
    border: 1px solid ;
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
.search-form-filter__item input[type=checkbox]:checked + label {
    background: #40BFFF1A;
    color: #40BFFF;
    border-color:#40BFFF;
    font-weight: 700;
}


.row-filter_wrapper-title{
  font-family: "Poppins";
  font-size: 14px;
  font-weight: 700;
  margin-bottom: 12px;
}
.closeFilterSearch{
  cursor: pointer;
}


</style>