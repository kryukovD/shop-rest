<template>
    <main>
        <section class="section-sign">
            <div class="container">
                <div class="section-sign__signIn section-sign-signIn">
                    <span class="section-sign-signIn__title">Вход</span>
                    <form @submit.prevent="submitForm()" class="section-sign__form" action="/" method="post">
                        <div class="row">
                            <div class="col-12 section-sign__col"> 
                                <div class="section-sign__wrap-input d-flex"> 
                                    <div class="auth-errors" v-for="(error, index) of v$.form.email.$errors" :key="index">
                                        {{ error.$message }}
                                    </div>
                                    <input class="flex-grow-1" v-model="form.email" type="text" placeholder="Ваш Email">
                                 </div>   
                            </div>

                            <div class="col-12 section-sign__col">
                                <div class="section-sign__wrap-input d-flex ">
                                    <div class="auth-errors" v-for="(error, index) of v$.form.password.$errors" :key="index">
                                        {{ error.$message }}
                                    </div>
                                     <input class="flex-grow-1" v-model="form.password" type="password" placeholder="Пароль"> </div>
                            </div>
                            <div class="col-12 section-sign__col">
                                <button type="submit" class="btn-auth" href="javascript:void(0)">Вход</button>
                            </div>
                            <div class="col-12 section-sign__col">
                                <div class="section-sign__problems">
                                    <router-link to="/restore">Забыли пароль?</router-link> 
                                    <div>
                                        Нет аккаунта?
                                        <router-link to="/registration">Зарегистрироваться?</router-link>
                                    </div>
                                </div>
                                
                            </div>
                            

                        </div>
                    </form>
                </div>
            </div>
        </section>
    </main>
</template>
 <script>
 import { email, required,helpers } from '@vuelidate/validators'
import { useVuelidate } from '@vuelidate/core'
import {authorizeUser} from "../api.js"
export default {
    data(){
        return {
            form:{
                email:null,
                password:null
            }
        }
    },
    setup: () => ({ v$: useVuelidate({$autoDirty:true}) }),
    validations () {
    return {
      form: {
        email: { required:helpers.withMessage('Обязательное поле*', required),email:helpers.withMessage('Некорректный email*', email)},
        password: {  required:helpers.withMessage('Обязательное поле*', required)}
      }
    }
},
methods: {
    async submitForm () {
      const isFormCorrect = await this.v$.$validate()
      // you can show some extra alert to the user or just leave the each field to show it's `$errors`.
      if (isFormCorrect) {
        let resultAuth=await authorizeUser(this.form.email,this.form.password);
        console.log(resultAuth);
        localStorage.setItem('user',JSON.stringify(resultAuth.data.user));
        this.$router.push("/profile");
      }
     
    }
  },
  mounted(){
    
  }
}
 </script>
<style scoped>
.section-sign__form >.row{
    margin: 0px;
}
    .section-sign{
        padding-top:172px;
        padding-bottom: 181px;
    }
    .section-sign-signIn{
        max-width: 436px;
        margin: auto;
    }
    .section-sign-signIn{
        padding: 40px;
        background: #FFFFFF;
        box-shadow: 0px 0px 30px 0px #2B2A3D1A;
        border-radius: 16px;
    }
    .section-sign-signIn__title{
        color: #333333;
        font-size: 20px;
        line-height: 24px;
        font-weight: 600;
        display: block;
        margin-bottom: 20px;
    }
    .section-sign__wrap-input input{
        width: 100%;
        border: 1px solid #EBF0FF;
        border-radius: 5px;
        height: 52px;
        padding-left: 16px;
        color: #9098B1;
        font-size: 16px;
        line-height: 19.2px;
        outline: none;
    }

    .section-sign__wrap-input input::-webkit-input-placeholder{
        color: #9098B1;
        font-size: 16px;
        line-height: 19.2px;

    }
    .btn-auth{
        display: flex;
        justify-content: center;
        align-items: center;
        background: #40BFFF;
        color: white;
        font-weight: 700;
        padding: 16.5px 22.5px;

    }
    .section-sign__col:first-child{
        margin-bottom: 16px;
    }
    .section-sign__col:nth-child(2){
        margin-bottom: 20px;
    }
    .section-sign__col:nth-child(3){
        margin-bottom: 30px;
    }
    .section-sign__problems{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .section-sign__problems > a{
        font-weight: 600;
        font-size: 14px;
        line-height: 16.8px;
        color: #40BFFF;
        margin-bottom: 10px;
    }
    .section-sign__problems > div {
        font-size: 14px;
        font-weight: 400;
        line-height: 16.8px;
        color: #9098B1;

    }
    .section-sign__problems > div a{
        color: #5C61F4;
        font-weight: 700;
    }
    @media (max-width:768px){
        .section-sign-signIn {
            width:100%;
        }
        .section-sign-signIn {
            padding: 20px;
            background: #FFFFFF;
            box-shadow: 0px 0px 30px 0px #2B2A3D1A;
            border-radius: 16px;
    }
    .section-sign .container{
        padding: 0px;
    }
    .section-sign-signIn__title{
    font-size: 16px;
    }
    .section-sign__wrap-input input{
        font-size: 12px;
        color: #9098B1;
        font-weight: 500;
    }
    .section-sign__wrap-input input::-webkit-input-placeholder{
        font-size: 12px;
        color: #9098B1;
        font-weight: 500;
    }
    .section-sign__col:first-child {
    margin-bottom: 8px;
    }
    .section-sign__col:nth-child(2) {
        margin-bottom: 16px;
    }
    .section-sign__problems > a {
    font-size: 12px;
    }
    .section-sign__problems > div {
        font-size: 12px;
    }
    }
 
   
</style>