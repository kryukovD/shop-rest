<template>
    <main v-if="user">
        <section class="section-profile">
            <div class="container">
                <div class="row section-profile__row">
                    <div class="col-md-3">
                        <ul class="menu-profile">
                            <li class="d-flex justify-content-between align-items-center menu-profile_active "><a href="javascript:void(0)">Профиль
                                </a> <svg width="7" height="12" viewBox="0 0 7 12" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path opacity="0.7" d="M1 1L6 6L1 11" stroke="#9098B1" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg></li>
                            <li class="d-flex justify-content-between align-items-center"><a href="javascript:void(0">Мои заказы  </a> <svg width="7" height="12" viewBox="0 0 7 12" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path opacity="0.7" d="M1 1L6 6L1 11" stroke="#9098B1" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg></li>
                            <li class="d-flex justify-content-between align-items-center"><a href="javascript:void(0">Вопрос-ответ </a> <svg width="7" height="12" viewBox="0 0 7 12" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path opacity="0.7" d="M1 1L6 6L1 11" stroke="#9098B1" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg></li>
                            <li class="d-flex justify-content-between align-items-center"><a href="javascript:void(0">Написать в чат-поддержки</a> <svg width="7" height="12" viewBox="0 0 7 12" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path opacity="0.7" d="M1 1L6 6L1 11" stroke="#9098B1" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg></li>
                            <li class="d-flex justify-content-between align-items-center"><a href="javascript:void(0">Установить на главный экран телефона</a> <svg width="7" height="12" viewBox="0 0 7 12" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path opacity="0.7" d="M1 1L6 6L1 11" stroke="#9098B1" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg></li>
                            <li class="d-flex justify-content-between align-items-center menu-profile__logout"><a href="javascript:void(0">Выйти</a></li>
                        </ul>
                    </div>

                    <div class="col-md-9">
                        <div class="content-menu-block">
                            <div class="content-menu-block__header"> <span>Профиль</span> </div>
                            <div class="content-menu-block-body">
                                <div class="content-menu-block-body__wrapper-photo">
                                    <div class="content-menu-block-body__photo"> <img src="../assets/images/nophoto.jpg"> </div> <div class="content-menu-block-body__name"> <span>Алексеев Максим </span></div>
                                </div>
                                 <ul class="profile-attr">
                                    <li class="d-flex justify-content-between"> <span class="profile-attr__title"> Имя</span>  <span class="profile-attr__value"> Maximus Gold</span></li>
                                    <li class="d-flex justify-content-between"> <span class="profile-attr__title"> Ваш пол</span>  <span class="profile-attr__value"> Мужской</span></li>
                                    <li class="d-flex justify-content-between"> <span class="profile-attr__title"> Номер телефона</span>  <span class="profile-attr__value"> +7 (917) 562 56-22</span></li>
                                    <li class="d-flex justify-content-between"> <span class="profile-attr__title"> Email</span>  <span class="profile-attr__value">Derlaxy@yahoo.com</span></li>
                                    <li class="d-flex justify-content-between"> <span class="profile-attr__title"> Регион</span>  <span class="profile-attr__value">Москва</span></li>
                                    <li class="d-flex justify-content-between"> <span class="profile-attr__title"> Пароль</span>  <span class="profile-attr__value"><input class="profile-attr__value-input" value="dsadsadsa" type="password"></span></li>
                                 </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<script >
export default {
    data() {
        return {
            user: JSON.parse(localStorage.getItem('user')),
            activeBlock:1
        }
    },
    mounted: function () {
        console.log(this.user)
        // localStorage.removeItem('user');
    }

}
</script>
<style scoped>
.profile-attr__value-input{
    text-align: right;
    outline: none;
    border:unset;
}

.profile-attr{
    font-size: 16px;
}
.profile-attr >li{
    padding-bottom: 16px;
    border-bottom: 1px solid #EBF0FF;
}
.profile-attr >li:not(:last-child){
    margin-bottom: 16px;
}
.profile-attr >li .profile-attr__title{
    font-weight: 500;
    line-height: 19.2px;
    color: #223263;
}
.profile-attr >li .profile-attr__value{
    line-height: 19.2px;
    color: #9098B1;
    width: max-content;
}
.content-menu-block-body__wrapper-photo{
    padding-top: 20px;
    padding-bottom: 30px;
}
.content-menu-block{
    box-shadow: 0px 0px 30px 0px #2B2A3D1A;
    border-radius: 16px;
   
}
.content-menu-block-body{
    padding:0px 40px 60px 40px;
}

.content-menu-block-body__name span{
    font-weight: 700;
    line-height: 19.2px;
    margin-left: 14px;
}
.content-menu-block__header{
    padding-top: 20px;
    padding-left: 40px;
    padding-right: 40px;
    padding-bottom: 20px;
    border-bottom: 1px solid#EBF0FF;
}
.content-menu-block__header span{
    font-size: 22px;
    font-weight: 500;
    line-height: 26.63px;
    color: #223263;

}
.section-profile .menu-profile , .section-profile .content-menu-block{
    margin: 0px 8px;
}
.section-profile__row{
    margin: 0px -8px;
}
.content-menu-block-body__wrapper-photo{
    display: flex;
    align-items: center;
}
.content-menu-block-body__photo{
    width: 80px;
    aspect-ratio: 1/1;
    overflow: hidden;
}
.content-menu-block-body__photo img{
    width: 100%;
    height: 100%;
    object-fit: cover;

}
.menu-profile__logout a{
 color: #9098B1;
}
.section-profile {
    padding-top: 50px;
    padding-bottom: 180px;
}

.menu-profile li {
    padding: 0px 25px;
}
.menu-profile li a {
    display: flex;
    align-items: center;
    height: 100%;
    border-bottom: 1px solid #EBF0FF;
    font-weight: 400;
    padding: 16px 0px;
    flex-grow: 1;
}
.menu-profile {
    font-size: 16px;
    line-height: 19.2px;
    color: #223263;
    max-width: 300px;
}
.menu-profile_active{
    background-color: #EBF0FF99;
    border-bottom: 1px solid #EBF0FF99;
}
</style>
