<script>
export default{
   props:{
    counterBasket:Number
   }
}
</script>
<template>
  <footer >
    <div class="container">
      <!-- Мобильный футер-->
      <div class="footer-mobile d-lg-none d-flex justify-content-between align-items-center">
        <router-link
          class="d-flex flex-column navgation-ui__link align-items-center"
          to="/"
        >
          <svg
            width="19"
            height="18"
            viewBox="0 0 19 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="11.5" width="7" height="7" fill="#9098B1" />
            <rect x="11.5" y="11" width="7" height="7" fill="#9098B1" />
            <rect x="0.5" width="7" height="7" fill="#9098B1" />
            <rect x="0.5" y="11" width="7" height="7" fill="#9098B1" />
          </svg>

          Каталог
        </router-link>

        <router-link
          class="d-flex flex-column navgation-ui__link align-items-center"
          to="/favorites"
        >
          <svg
            width="19"
            height="17"
            viewBox="0 0 19 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.90372 9.22139L9.50026 16L16.0968 9.22139L16.1324 9.18479C17.9559 7.31104 17.9559 4.27906 16.1324 2.40618C14.309 0.533306 11.3585 0.532435 9.53589 2.40618L9.50026 2.44279L9.4638 2.40531C7.64037 0.531563 4.68982 0.531563 2.86725 2.40531C1.04467 4.27906 1.04383 7.31104 2.86725 9.18392L2.90372 9.22139Z"
              stroke="#9098B1"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          Избранное
        </router-link>
        <router-link
          class="d-flex flex-column navgation-ui__link align-items-center"
          to="/chats"
        >
          <svg
            width="19"
            height="14"
            viewBox="0 0 19 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0.467773 0.903226C0.467773 0.404388 0.872161 0 1.371 0H17.6291C18.1279 0 18.5323 0.404388 18.5323 0.903226V13.0968C18.5323 13.5956 18.1279 14 17.6291 14H1.371C0.872161 14 0.467773 13.5956 0.467773 13.0968V0.903226ZM2.27422 1.80645V12.1935H16.7258V1.80645H2.27422Z"
              fill="#9098B1"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0.685229 0.315438C1.00986 -0.0633115 1.58007 -0.10718 1.95882 0.217456L9.50005 6.68123L17.0413 0.217456C17.42 -0.10718 17.9902 -0.0633115 18.3149 0.315438C18.6395 0.694187 18.5956 1.26439 18.2169 1.58903L10.0879 8.55662C9.74961 8.84654 9.25049 8.84654 8.91224 8.55662L0.783211 1.58903C0.404462 1.26439 0.360594 0.694187 0.685229 0.315438Z"
              fill="#9098B1"
            />
          </svg>

          Чаты
        </router-link>

        <router-link
          class="d-flex flex-column navgation-ui__link navgation-ui__link-order align-items-center"
          to="/orders"
        >
          <svg
            width="19"
            height="18"
            viewBox="0 0 19 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 17C7.27614 17 7.5 16.7761 7.5 16.5C7.5 16.2239 7.27614 16 7 16C6.72386 16 6.5 16.2239 6.5 16.5C6.5 16.7761 6.72386 17 7 17Z"
              fill="#9098B1"
              stroke="#9098B1"
              stroke-width="2"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M14 17C14.2761 17 14.5 16.7761 14.5 16.5C14.5 16.2239 14.2761 16 14 16C13.7239 16 13.5 16.2239 13.5 16.5C13.5 16.7761 13.7239 17 14 17Z"
              fill="#9098B1"
              stroke="#9098B1"
              stroke-width="2"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M1.5 1H3.5L5.5 13H15.5L17.5 4H4.5"
              stroke="#9098B1"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <div class="order-count">{{ counterBasket }}</div>
          Заказы
        </router-link>

        <router-link
          class="d-flex flex-column navgation-ui__link align-items-center"
          to="/orders"
        >
          <svg
            width="19"
            height="18"
            viewBox="0 0 19 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M9.50004 1.8001C8.05731 1.8001 6.88775 2.96967 6.88775 4.4124C6.88775 5.85513 8.05731 7.02469 9.50004 7.02469C10.9428 7.02469 12.1123 5.85513 12.1123 4.4124C12.1123 2.96967 10.9428 1.8001 9.50004 1.8001ZM5.08765 4.4124C5.08765 1.9755 7.06314 0 9.50004 0C11.9369 0 13.9124 1.9755 13.9124 4.4124C13.9124 6.8493 11.9369 8.82479 9.50004 8.82479C7.06314 8.82479 5.08765 6.8493 5.08765 4.4124Z"
              fill="#9098B1"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M7.26596 12.0516C4.52306 12.0516 2.29962 14.275 2.29962 17.0179V17.0999C2.29962 17.597 1.89665 18 1.39956 18C0.902479 18 0.499512 17.597 0.499512 17.0999V17.0179C0.499512 13.2808 3.52889 10.2515 7.26596 10.2515H11.7341C15.4712 10.2515 18.5005 13.2808 18.5005 17.0179V17.0999C18.5005 17.597 18.0976 18 17.6005 18C17.1034 18 16.7004 17.597 16.7004 17.0999V17.0179C16.7004 14.275 14.477 12.0516 11.7341 12.0516H7.26596Z"
              fill="#9098B1"
            />
          </svg>

          Профиль
        </router-link>
      </div>
      <!--Конец мобильного футера -->
      <div class="row d-none d-lg-flex">
        <div class="col-md-4 col-xl-2">
          <div class="footer-logo">
            <div class="logo d-flex align-items-center justify-content-center">
              Лого
            </div>
          </div>
        </div>
        <!-- Центральная часть-->
        <div class=" col-md-8 col-xl-8">
          <div class="row justify-content-center">
            <div class="col-md-4 col-xl-4">
              <div class="footer-col">
                <div class="footer-col__title">Покупателям</div>
                <ul class="footer-list">
                  <li><router-link to="/"> Как сделать заказ</router-link></li>
                  <li><router-link to="/"> Способы оплаты</router-link></li>
                  <li><router-link to="/"> Доставка</router-link></li>
                  <li><router-link to="/"> Возврат товара</router-link></li>
                  <li>
                    <router-link to="/"> Возврат денежных средств</router-link>
                  </li>
                  <li><router-link to="/"> Правила продажи</router-link></li>
                  <li>
                    <router-link to="/">
                      Правила пользования торговой площадкой</router-link
                    >
                  </li>
                </ul>
              </div>
            </div>

            <div class="col-md-4 col-xl-4">
              <div class="footer-col">
                <div class="footer-col__title">Продавцам</div>
                <ul class="footer-list">
                  <li><router-link to="/"> Реквизиты</router-link></li>
                  <li><router-link to="/"> Контакты</router-link></li>
                  <li>
                    <router-link to="/"> Партнерский пункт выдачи</router-link>
                  </li>
                  <li><router-link to="/"> Возврат товара</router-link></li>
                </ul>
              </div>
            </div>

            <div class="col-md-4 col-xl-4">
              <div class="footer-col">
                <div class="footer-col__title">Помощь</div>
                <ul class="footer-list">
                  <li><router-link to="/"> Доставка</router-link></li>
                  <li><router-link to="/"> Доставка</router-link></li>
                  <li><router-link to="/"> Выкуп</router-link></li>
                  <li><router-link to="/"> Кэшбэк</router-link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <!-- Конец центральной части-->

        <div class=" col-md-12 col-xl-2">
          <div class="footer-col">
            <div class="qr-block">
              <img src="../assets/images/qr.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
footer {
  background: #1a2033;
  padding-top: 54px;
  padding-bottom: 14px;
}
.footer-list a {
  color: #9098b1;
  line-height: 24px;
}
.footer-list {
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding-bottom: 44px;
}
.footer-col__title {
  color: white;
  font-size: 18px;
  line-height: 24px;
  font-weight: 600;
  margin-bottom: 12px;
}
.qr-block {
  padding: 27px;
  border: 1px solid #9098b1;
  border-radius: 16px;
}
.footer-col {
  width: max-content;
}
.footer-list li {
  display: inline-block;
}
.footer-list {
  max-width: 250px;
}

@media (max-width: 991.8px) {
  footer {
    background: white;
    padding-top: 12px;
    padding-bottom: 16px;
    border-top: 1px solid #EBF0FF;
    position: fixed;
    bottom: 0px;
    left: 0px;
    right: 0px;
  }
  .footer-mobile {
    background: white;
  }
  .footer-mobile a {
    gap: 6px;
    color: #9098b1;
    font-size: 10px;
    line-height: 15px;
    font-weight: 500;
  }
  .order-count{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
    background: #FB7181;
    border-radius: 50%;
    position: absolute;
    top: -7px;
    right: -7px;
    color: white;
    font-weight: 700;
    line-height: 14px;
    font-family: "Poppins";

  }
  .navgation-ui__link-order{
    position: relative;
  }
}
@media (min-width:768px) and (max-width:1200px){
  .footer-col{
    width:auto;
  }
  .qr-block{
    width: max-content;
  }
}
</style>
