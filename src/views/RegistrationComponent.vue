<template>
    <main>
        <section class="section-registration">
            <div class="container">
                <div class="section-registration__inner">
                    <form @submit.prevent="submitForm()" class="section-registration_form">
                        <span class="section-sign-signIn__title">Регистрация</span>
                        <div class="row">
                            <div class="col-12">

                                <div class="section-sign__wrap-input d-flex">
                                    <div class="auth-errors" v-for="(error, index) of v$.form.name.$errors" :key="index">
                                        {{ error.$message }}
                                    </div>
                                    <input v-model="form.name" class="flex-grow-1" type="text" placeholder="Полное имя">

                                </div>
                            </div>
                            <div class="col-12">

                                <div class="section-sign__wrap-input d-flex">
                                    <div class="auth-errors" v-for="(error, index) of v$.form.email.$errors" :key="index">
                                        {{ error.$message }}
                                    </div>
                                    <input v-model="form.email" class="flex-grow-1" type="text" placeholder="Ваш Email">
                                </div>
                            </div>

                            <div class="col-12">

                                <div class="section-sign__wrap-input d-flex">
                                    <div class="auth-errors" v-for="(error, index) of v$.form.phone.$errors" :key="index">
                                        {{ error.$message }}
                                    </div>
                                    <input v-mask="'+7 ### #### ###'" v-model="form.phone" class="flex-grow-1"   type="text" placeholder="Телефон">
                                </div>
                            </div>

                            <div class="col-12">
                                <div class="section-sign__wrap-input d-flex">
                                    <div class="auth-errors" v-for="(error, index) of v$.form.password.$errors"
                                        :key="index">
                                        {{ error.$message }}
                                    </div>
                                    <input ref="pass" v-model="form.password" class="flex-grow-1" type="password"
                                        placeholder="Пароль">
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="section-sign__wrap-input d-flex">
                                    <div class="auth-errors" v-for="(error, index) of v$.form.repeatPassword.$errors"
                                        :key="index">
                                        {{ error.$message }}
                                    </div>
                                    <input v-model="form.repeatPassword" class="flex-grow-1" type="password"
                                        placeholder="Повторите пароль">
                                </div>
                            </div>

                        </div>
                        <div class="section-registration__wrap-btn">
                            <button type="submit" class="btn-auth"> Зарегистрироваться </button>
                        </div>
                        <div class="section-registration__promt">
                            <span>Имеется аккаунт? <router-link to="/signIn">Войти</router-link> </span>
                        </div>
                        <p class="server-errors" v-if="serverMessage!==null">{{ serverMessage }}</p>
                    </form>
                </div>
            </div>
        </section>
    </main>
</template>
<script>
import { email, required, helpers, sameAs,minLength } from '@vuelidate/validators'
import { useVuelidate } from '@vuelidate/core'
import { userRegistration, authorizeUser } from "../api.js"
import {mask} from 'vue-the-mask'

export default {
    data() {
        return {
            form: {
                name: null,
                email: null,
                phone:null,
                password: null,
                repeatPassword: null
            },
            serverMessage:null
        }
    },
    directives: {mask},
    setup: () => ({ v$: useVuelidate({ $autoDirty: true }) }),
    validations() {
        return {
            form: {
                name: { required: helpers.withMessage('Обязательное поле*', required) },
                email: { required: helpers.withMessage('Обязательное поле*', required), email: helpers.withMessage('Некорректный email*', email)},
                phone: { required: helpers.withMessage('Обязательное поле*', required),minLengthValue: helpers.withMessage('Мин дллина 13 символов', minLength(15)) },
                password: { required: helpers.withMessage('Обязательное поле*', required) },
                repeatPassword: { sameAsPassword: helpers.withMessage('Пароли должны совпадать', sameAs(this.form.password)) }
            }
        }
    },
    methods: {
        async submitForm() {

            const isFormCorrect = await this.v$.$validate()
            // you can show some extra alert to the user or just leave the each field to show it's `$errors`.
            if (isFormCorrect) {
                const successRegistration = await userRegistration(this.form.name, this.form.email,this.form.phone, this.form.password, this.form.repeatPassword);
                if (successRegistration.data.message==true) {
                    let autorizeData = await authorizeUser(this.form.email, this.form.password);
                    localStorage.setItem("user", JSON.stringify(autorizeData.data.user));
                    this.$emit("zeroing");
                    this.$router.push('/profile/')
                }
                else{
                    this.serverMessage="Такой пользователь уже сущесттвует"
                }

            }
        }
    },
  
}
</script>

<style scoped>
.server-errors{
    text-align: center;
    margin-top: 5px;
    color: red;
    font-size: 12px;
}
.section-sign__wrap-input input::-webkit-input-placeholder {
    color: #9098B1;
    font-size: 16px;
    line-height: 19.2px;

}

.section-registration {
    margin-top: 160px;
    margin-bottom: 180px;
    max-width: 436px;
    background: white;
    box-shadow: 0px 0px 30px 0px #2B2A3D1A;
    border-radius: 16px;
    margin-left: auto;
    margin-right: auto;

}

.section-registration_form {
    padding: 40px;
}

.section-registration_form .row>div:not(:last-child) {
    margin-bottom: 11px;
}

.section-registration_form .row {
    margin-bottom: 20px;
}

.section-registration__promt {
    display: flex;
    justify-content: center;
    color: #9098B1;
    font-size: 14px;
    line-height: 16.8px;
}

.section-registration__promt a {
    color: #40BFFF;
    font-weight: 700;
}

.section-registration__wrap-btn {
    margin-bottom: 30px;
}

@media (max-width:767.8px) {
    .section-registration_form {
        padding: 20px;
    }

    .section-registration .container {
        padding: 0px;
    }
}</style>