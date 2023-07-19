
<template>
  <main class="d-flex flex-column">
    <section class="section-detail-card">
      <!-- Хлебные крошки-->
      <div class="container ">
        <!-- <div class="breadcrumb d-none d-md-block">
          <div class="d-flex">
            <router-link to="/">Главная</router-link>
            <router-link to="/">Nike Air Zoom Pegasus 36 Miami</router-link>
          </div>
        </div> -->
        <Breadcrumbs :items="breadcrumbs" class="d-none d-md-block"/>

        <div class="d-flex d-md-none  justify-content-between align-items-md-center">
          <div class="d-flex align-items-center">
            <router-link to="/">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 18L9 12L15 6"
                stroke="#9098B1"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </router-link>
            <span class="detail-card__mobile">{{ detailCard.name }}.</span>
          </div>

          <!-- mobile-->

          <div class="notes notes-mobile d-flex justify-content-end">
          <div class="notes__inner">
            <svg
              width="22"
              height="20"
              viewBox="0 0 22 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.75465 10.8657L11.0003 19L19.246 10.8657L19.2905 10.8217C21.5698 8.57325 21.5698 4.93487 19.2905 2.68742C17.0113 0.439968 13.3231 0.438922 11.0449 2.68742L11.0003 2.73134L10.9547 2.68637C8.67547 0.437876 4.98728 0.437876 2.70906 2.68637C0.430843 4.93487 0.429783 8.57325 2.70906 10.8207L2.75465 10.8657Z"
                stroke="#223263"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M16.873 1.25022C16.3758 1.25022 15.8989 1.44773 15.5473 1.79932C15.1957 2.1509 14.9982 2.62774 14.9982 3.12495C14.9982 3.62217 15.1957 4.09901 15.5473 4.45059C15.8989 4.80218 16.3758 4.99969 16.873 4.99969C17.3702 4.99969 17.847 4.80218 18.1986 4.45059C18.5502 4.09901 18.7477 3.62217 18.7477 3.12495C18.7477 2.62774 18.5502 2.1509 18.1986 1.79932C17.847 1.44773 17.3702 1.25022 16.873 1.25022ZM13.7484 3.12495C13.7483 2.39185 14.006 1.68205 14.4764 1.11975C14.9468 0.557447 15.5999 0.178447 16.3215 0.049057C17.0431 -0.0803328 17.7872 0.0481275 18.4237 0.411963C19.0601 0.775798 19.5484 1.35184 19.803 2.0393C20.0576 2.72677 20.0624 3.48188 19.8165 4.17252C19.5707 4.86317 19.0898 5.44536 18.458 5.81726C17.8262 6.18915 17.0838 6.32705 16.3606 6.20684C15.6374 6.08662 14.9795 5.71595 14.502 5.15967L6.10573 9.05912C6.29875 9.67084 6.29875 10.3271 6.10573 10.9389L14.502 14.8383C15.0068 14.2513 15.7115 13.8726 16.4795 13.7755C17.2476 13.6785 18.0243 13.87 18.6592 14.313C19.2941 14.756 19.7419 15.4189 19.9159 16.1733C20.0898 16.9276 19.9776 17.7197 19.6008 18.396C19.2241 19.0723 18.6097 19.5847 17.8767 19.8338C17.1437 20.0829 16.3443 20.0511 15.6335 19.7444C14.9227 19.4377 14.351 18.8781 14.0293 18.1739C13.7075 17.4698 13.6587 16.6713 13.8921 15.9332L5.49581 12.0337C5.08016 12.5181 4.52613 12.8636 3.90826 13.0237C3.29038 13.1838 2.63829 13.1508 2.03972 12.9292C1.44114 12.7076 0.924797 12.308 0.560137 11.7841C0.195478 11.2602 0 10.6373 0 9.99899C0 9.36071 0.195478 8.73774 0.560137 8.21388C0.924797 7.69003 1.44114 7.29041 2.03972 7.0688C2.63829 6.84719 3.29038 6.81422 3.90826 6.97431C4.52613 7.1344 5.08016 7.47988 5.49581 7.96428L13.8921 4.06482C13.7966 3.7607 13.7481 3.44374 13.7484 3.12495ZM3.12489 8.12425C2.62768 8.12425 2.15084 8.32177 1.79925 8.67335C1.44767 9.02493 1.25016 9.50178 1.25016 9.99899C1.25016 10.4962 1.44767 10.973 1.79925 11.3246C2.15084 11.6762 2.62768 11.8737 3.12489 11.8737C3.6221 11.8737 4.09895 11.6762 4.45053 11.3246C4.80211 10.973 4.99963 10.4962 4.99963 9.99899C4.99963 9.50178 4.80211 9.02493 4.45053 8.67335C4.09895 8.32177 3.6221 8.12425 3.12489 8.12425ZM16.873 14.9983C16.3758 14.9983 15.8989 15.1958 15.5473 15.5474C15.1957 15.899 14.9982 16.3758 14.9982 16.873C14.9982 17.3702 15.1957 17.8471 15.5473 18.1987C15.8989 18.5502 16.3758 18.7478 16.873 18.7478C17.3702 18.7478 17.847 18.5502 18.1986 18.1987C18.5502 17.8471 18.7477 17.3702 18.7477 16.873C18.7477 16.3758 18.5502 15.899 18.1986 15.5474C17.847 15.1958 17.3702 14.9983 16.873 14.9983Z"
                fill="#223263"
              />
            </svg>
          </div>
        </div>
        <!-- Конец mobile-->


        </div>
        <div class="notes d-none d-md-flex justify-content-end">
          <div class="notes__inner">
            <svg
              width="22"
              height="20"
              viewBox="0 0 22 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.75465 10.8657L11.0003 19L19.246 10.8657L19.2905 10.8217C21.5698 8.57325 21.5698 4.93487 19.2905 2.68742C17.0113 0.439968 13.3231 0.438922 11.0449 2.68742L11.0003 2.73134L10.9547 2.68637C8.67547 0.437876 4.98728 0.437876 2.70906 2.68637C0.430843 4.93487 0.429783 8.57325 2.70906 10.8207L2.75465 10.8657Z"
                stroke="#223263"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M16.873 1.25022C16.3758 1.25022 15.8989 1.44773 15.5473 1.79932C15.1957 2.1509 14.9982 2.62774 14.9982 3.12495C14.9982 3.62217 15.1957 4.09901 15.5473 4.45059C15.8989 4.80218 16.3758 4.99969 16.873 4.99969C17.3702 4.99969 17.847 4.80218 18.1986 4.45059C18.5502 4.09901 18.7477 3.62217 18.7477 3.12495C18.7477 2.62774 18.5502 2.1509 18.1986 1.79932C17.847 1.44773 17.3702 1.25022 16.873 1.25022ZM13.7484 3.12495C13.7483 2.39185 14.006 1.68205 14.4764 1.11975C14.9468 0.557447 15.5999 0.178447 16.3215 0.049057C17.0431 -0.0803328 17.7872 0.0481275 18.4237 0.411963C19.0601 0.775798 19.5484 1.35184 19.803 2.0393C20.0576 2.72677 20.0624 3.48188 19.8165 4.17252C19.5707 4.86317 19.0898 5.44536 18.458 5.81726C17.8262 6.18915 17.0838 6.32705 16.3606 6.20684C15.6374 6.08662 14.9795 5.71595 14.502 5.15967L6.10573 9.05912C6.29875 9.67084 6.29875 10.3271 6.10573 10.9389L14.502 14.8383C15.0068 14.2513 15.7115 13.8726 16.4795 13.7755C17.2476 13.6785 18.0243 13.87 18.6592 14.313C19.2941 14.756 19.7419 15.4189 19.9159 16.1733C20.0898 16.9276 19.9776 17.7197 19.6008 18.396C19.2241 19.0723 18.6097 19.5847 17.8767 19.8338C17.1437 20.0829 16.3443 20.0511 15.6335 19.7444C14.9227 19.4377 14.351 18.8781 14.0293 18.1739C13.7075 17.4698 13.6587 16.6713 13.8921 15.9332L5.49581 12.0337C5.08016 12.5181 4.52613 12.8636 3.90826 13.0237C3.29038 13.1838 2.63829 13.1508 2.03972 12.9292C1.44114 12.7076 0.924797 12.308 0.560137 11.7841C0.195478 11.2602 0 10.6373 0 9.99899C0 9.36071 0.195478 8.73774 0.560137 8.21388C0.924797 7.69003 1.44114 7.29041 2.03972 7.0688C2.63829 6.84719 3.29038 6.81422 3.90826 6.97431C4.52613 7.1344 5.08016 7.47988 5.49581 7.96428L13.8921 4.06482C13.7966 3.7607 13.7481 3.44374 13.7484 3.12495ZM3.12489 8.12425C2.62768 8.12425 2.15084 8.32177 1.79925 8.67335C1.44767 9.02493 1.25016 9.50178 1.25016 9.99899C1.25016 10.4962 1.44767 10.973 1.79925 11.3246C2.15084 11.6762 2.62768 11.8737 3.12489 11.8737C3.6221 11.8737 4.09895 11.6762 4.45053 11.3246C4.80211 10.973 4.99963 10.4962 4.99963 9.99899C4.99963 9.50178 4.80211 9.02493 4.45053 8.67335C4.09895 8.32177 3.6221 8.12425 3.12489 8.12425ZM16.873 14.9983C16.3758 14.9983 15.8989 15.1958 15.5473 15.5474C15.1957 15.899 14.9982 16.3758 14.9982 16.873C14.9982 17.3702 15.1957 17.8471 15.5473 18.1987C15.8989 18.5502 16.3758 18.7478 16.873 18.7478C17.3702 18.7478 17.847 18.5502 18.1986 18.1987C18.5502 17.8471 18.7477 17.3702 18.7477 16.873C18.7477 16.3758 18.5502 15.899 18.1986 15.5474C17.847 15.1958 17.3702 14.9983 16.873 14.9983Z"
                fill="#223263"
              />
            </svg>
          </div>
        </div>

        <div class="detail-card-notice d-block d-md-none">
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
        <div class="detail-card ">
          <div class="detail-card__title">
            <h1 class="d-none d-md-block">{{ detailCard.name }}</h1>
          </div>
          <div class="row">
            <div class=" col-12 col-xl-5">
              <div class="col-slider">
                <section
                  id="main-carousel"
                  class="splide"
                  aria-label="The carousel with thumbnails. Selecting a thumbnail will change the Beautiful Gallery carousel."
                >
                  <div class="splide__track">
                    <ul class="splide__list">
                      <li class="splide__slide">
                        <img src="../assets/card.png" alt="" />
                      </li>
                      <li class="splide__slide">
                        <img src="../assets/card.png" alt="" />
                      </li>
                      <li class="splide__slide">
                        <img src="../assets/card.png" alt="" />
                      </li>
                    </ul>
                  </div>
                </section>

                <section
                  id="thumbnail-carousel"
                  class="splide"
                  aria-label="The carousel with thumbnails. Selecting a thumbnail will change the Beautiful Gallery carousel."
                >
                  <div class="splide__track">
                    <ul class="splide__list">
                      <li class="splide__slide">
                        <img src="../assets/card.png" alt="" />
                      </li>
                      <li class="splide__slide">
                        <img src="../assets/card.png" alt="" />
                      </li>
                      <li class="splide__slide">
                        <img src="../assets/card.png" alt="" />
                      </li>
                    </ul>
                  </div>
                </section>
              </div>
            </div>
            <div class="col-12 col-xl-7">
              <div
                class="detail-card__description detail-card-description d-flex flex-column"
              >
                <div class="d-block d-md-none detail-card-description__name-card"> {{ detailCard.name }}</div>
                <div class="detail-card-notice d-none d-md-block">
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

                <div class="card-values">
                  <span class="card__price">{{ detailCard.price }} ₽</span>
                  <div class="d-flex discounts">
                    <div class="discount-wb d-flex align-items-center">
                      <div class="discount-wb__image d-flex align-items-center">
                        <img src="../assets/images/icons/wb.png" />
                      </div>
                      <span class="discount-wb__value"
                        >{{ detailCard.price_discount }} ₽
                      </span>
                    </div>
                    <div class="discount-cashback d-flex align-items-center">
                      <span> Кэшбэк {{ detailCard.cashback }} ₽ </span>
                      <div class="discount-cashback__per">
                        -{{ detailCard.discount }}%
                      </div>
                    </div>
                  </div>
                  <div class="card-quantity">
                    В наличии {{ detailCard.left_count }}/{{
                      detailCard.total_count
                    }}
                    шт
                  </div>
                </div>
                <div class="detail-card-completing">
                  <span class="d-block detail-card-completing__title"
                    >Выполнение: 4 дня</span
                  >
                  <div class="detail-card-notice">
                    <span class="d-block detail-notice__title">
                      Обязательные условия:</span
                    >
                    <ul class="detail-card-completing-list">
                      <li>
                        1. Выкупить товар, прислать скриншот о покупке. Забрать
                        товар из ПВЗ в первые 2 дня после доставки.
                      </li>
                      <li>
                        2. Оставить положительный отзыв с 2-3 фото. Разрезать
                        стикер маркетплайса.
                      </li>
                      <li>3. Получить КЭШБЭК на карту 14 дней</li>
                    </ul>
                  </div>
                </div>
                <!-- Профиль-->
                <div class="detail-card-profile">
                  <div
                    class="d-flex detail-card-profile__person align-items-center"
                  >
                    <div class="detail-card-profile__image">
                      <img src="../assets/images/profile.png" />
                    </div>
                    <div class="detail-card-profile__contacts">
                      <span class="detail-card-profile__name"
                        >Алексеев Максим
                      </span>
                      <div class="d-flex">
                        <svg
                          class="profile-star"
                          width="16"
                          height="15"
                          viewBox="0 0 16 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8 0L10.6613 4.33699L15.6085 5.52786L12.3061 9.39915L12.7023 14.4721L8 12.5277L3.29772 14.4721L3.69387 9.39915L0.391548 5.52786L5.33867 4.33699L8 0Z"
                            fill="#FFC833"
                          />
                        </svg>
                        <span class="profile-statics">
                          <span class="profile-statics__value"> 4.5</span>
                          <span> (1205/ 1205 оплаченных кэшбэков)</span></span
                        >
                      </div>
                    </div>
                  </div>

                  <div class="d-flex detail-card-profile__buttons">
                    <a class="btn-chat inline-flex" href="javascript:void(0)"
                      >Чат</a
                    >
                    <a class="btn-to-work inline-flex" href="javascript:void(0)"
                      >Взять в работу</a
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
  <app-footer></app-footer>
</template>
<script>
import FooterComponent from "../components/FooterComponent.vue";
import Splide from "@splidejs/splide";
import { getProductById, getCurrentCategory } from "../api.js";
import BreadCrumbsComponent from "../components/Breadcrumb.vue"

export default {
  data() {
    return {
      howWorkDisplay: false,
      detailCard: {},
      category: {},
      breadcrumbs: [],
    };
  },
  components: {
    "app-footer": FooterComponent,
    "Breadcrumbs":BreadCrumbsComponent
  },
  methods: {
    initMainSlider() {
      var main = new Splide("#main-carousel", {
        type: "fade",
        rewind: true,
        pagination: false,
        arrows: false,
        
        
      });

      var thumbnails = new Splide("#thumbnail-carousel", {
        fixedWidth: 68,
        fixedHeight: 92,
        gap: 26,
        arrows: false,
        rewind: true,
        pagination: false,
        isNavigation: true,
        breakpoints: {
          1200: {
            isNavigation:false,
            fixedWidth: 60,
            fixedHeight: 44,
            destroy: true,
          },
        },
      });

      main.sync(thumbnails);
      main.mount();
      thumbnails.mount();
    },
    getProduct() {
      getProductById(this.$route.params.id).then((responce) => {
        this.detailCard = responce.data.data;
        getCurrentCategory(this.detailCard.category_id).then((categoryResponce)=> {
          this.category = categoryResponce.data[0];
          this.createBreadcrumbs()
        });
      });
    },
    createBreadcrumbs() {
      this.breadcrumbs=[]
      this.breadcrumbs.push({
        text:"Главная",
        path:"/"
      },{
        text:this.category.name,
        path:`/catalog/category/${this.category.id}`
      },
      {
        text:this.detailCard.name,
        path:`/catalog/${this.detailCard.id}`
      }
      )
    },
  },

  mounted() {
    this.initMainSlider();
  },
  created() {
    this.getProduct();
  },
  watch: {
    $route: function() {
      this.getProduct();
    },
  },
};
</script>
<style scoped>
@import "@splidejs/splide/css/core";
.discounts {
  gap: 20px;
  margin-bottom: 20px;
}
.card-quantity {
  color: #1d9ff8;
  font-weight: 400;
  font-size: 16px;
}
.discount-cashback {
  gap: 10px;
}
.discount-cashback span {
  font-size: 16px;
  font-weight: #223263;
  line-height: 20px;
}
.discount-cashback__per {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background: #ffc833;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 600;
  padding: 5.5px 9px;
}
.discount-wb__value {
  font-weight: 600;
  font-size: 20px;
  color: #223263b2;
  text-decoration: line-through;
}
.card__price {
  display: block;
  font-weight: 600;
  color: #333333;
  margin-bottom: 18px;
  font-size: 28px;
}
.discount-wb {
  gap: 18px;
}
.col-slider {
  height: 100%;
}
#thumbnail-carousel .splide__list {
  gap: 20px;
}
#thumbnail-carousel img {
  width: 68px;
  height: 92px;
  object-fit: contain;
}
#main-carousel img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
#thumbnail-carousel .splide__list {
  flex-direction: column;
}
.col-slider > section:first-child {
  order: 1;
}
img {
  max-width: 100%;
}
.slider-nav img {
  width: 100px;
  height: 100px;
}
.slider-controll .slick-slide {
  width: 150px;
  height: 150xp;
  cursor: pointer;
  border: 2px solid transparent;
}
.slider-controll .slick-slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.slider-controll .slick-slide.slick-current {
  border-color: skyblue;
}
.profile-statics {
  color: #9098b1;
  font-size: 14px;
}
.profile-statics__value {
  color: #9098b1;
  font-size: 14px;
  font-weight: 600;
  color: #223263;
}
.detail-card-profile__person {
  gap: 14px;
  margin-bottom: 16px;
}
.profile-star {
  margin-right: 8px;
}
.detail-card-profile__buttons {
  gap: 20px;
}
.detail-card-profile__name {
  display: block;
  margin-bottom: 12px;
  font-size: 16px;
  font-weight: 600;
  color: 600;
}
.btn-chat {
  background: #5c61f4;
  color: white;
  border-radius: 5px;
  font-weight: 600;
  padding: 18.5px 35.5px;
}
.btn-to-work {
  background: #53d16f;
  padding: 18.5px 80px;
  font-weight: 600;
  border-radius: 5px;
  color: white;
}
.detail-card-profile__image {
  width: 80px;
  aspect-ratio: 1/1;
  border-radius: 50%;
  overflow: hidden;
}
.detail-card-profile__image img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.detail-card-completing-list li:not(:last-child) {
  margin-bottom: 10px;
}
.detail-card-completing__title {
  font-weight: 500;
  margin-bottom: 10px;
}
.detail-card {
  color: #223263;
}
.how-work-information svg {
  margin-left: 6px;
}
.detail-card-description {
  margin-bottom: 30px;
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
.detail-card p {
  font-size: 14px;
}
.notes__inner {
  display: flex;
  gap: 20px;
  align-items: center;
}
.detail-card-description {
  padding-left: 40px;
  gap: 22px;
}
.detail-card-notice {
  padding-top: 18px;
  padding-bottom: 20px;
  padding-left: 20px;
  padding-right: 41px;
  background: white;
  border-radius: 10px;
  box-shadow: 0px 0px 30px 0px #2b2a3d1a;
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
.section-detail-card {
  padding-top: 40px;
  padding-bottom: 180px;
}
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.breadcrumb a {
  color: #9098b1;
  font-size: 14px;
  line-height: 16px;
}
.breadcrumb a:not(:first-child):before {
  content: "—";
  padding: 0px 6px;
}
.breadcrumb a:before:last-child {
  color: #223263;
}
.col-slider {
  display: flex;
}
.col-slider > div:last-child {
  order: 1;
  width: 30%;
}
.col-slider > div:first-child {
  order: 2;
  width: 70%;
}
.notes__inner svg{
  cursor: pointer;
}
@media (max-width: 767.8px) {
  .section-detail-card {
    padding-top: 140px;
    padding-bottom: 94px;
  }
  .detail-card__mobile{
    font-size: 16px;
    line-height: 24px;
    font-weight: 600;
    font-family: "Inter";
    text-transform: uppercase;
    color: #223263;
    width: 211px;
    overflow: hidden;
    text-overflow: ellipsis;
    height: 24px;
    white-space: nowrap;
    
  }
  #thumbnail-carousel{
    display: none;
  }
  .detail-card-description[data-v-7f922a83] {
     padding-left: 0px; 
    gap: 12px;
}
.detail-card-notice{
  margin-top: 20px;
}
.detail-card__description{
  margin-top: 40px;
}
.detail-card-description__name-card{
  font-size: 18px;
  font-weight: 500;
  line-height: 21.6px;
  color: #223263;
}
.card__price {
   font-size: 22px;
   margin-bottom: 12px;
}
.discounts{
  flex-wrap: wrap;
  gap: 12px;
}
.discounts >div{
  width: 100%;
}
.discount-wb__value{
  font-size: 14px;
}
.discount-cashback span {
  font-size: 14px;
}
.discount-cashback__per{
  font-size: 14px;
  padding: 2.5px 3.5px;
}
.card-quantity{
  font-size: 14px;
}
.detail-card-completing-list{
  font-size: 12px;
}
.detail-notice__title {
    font-size: 14px;
}
.detail-card-profile__name{
  font-size: 14px;
  margin-bottom: 12px;
}
.btn-chat {
   display: flex;
    font-size: 16px;
    padding: 18.5px 35px;
    align-items: center;
    justify-content: center;
    text-align: center;
}
.btn-to-work {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #53d16f;
    padding: 18.5px 52px;
    font-weight: 600;
    border-radius: 5px;
    color: white;
    font-size: 16px;
    text-align: center;
}
#main-carousel img{
    width: 100%;
    height: 450px;
    aspect-ratio: 337/450;
    object-fit: contain;
}

}
@media ((min-width:768px) and (max-width:1198.8px)){
  #thumbnail-carousel{
    display: none;
  }
  #main-carousel img{
    width: 100%;
    height: 450px;
    aspect-ratio: 337/450;
    object-fit: contain;
}
  .detail-card-description{
    padding-left: 0px;
    gap: 22px;
}
.section-detail-card{
    padding-top: 40px;
    padding-bottom: 120px;
}
.detail-card-notice{
  margin-top: 20px;
}
}
</style>
