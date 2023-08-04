<template>
    <main>
        <section class="section-registration" v-if="!showSuccess">
            <div class="container">
                <div class="section-registration__inner">
                    <form @submit.prevent="submitForm()" class="section-registration_form">
                        <span class="section-sign-signIn__title">Восстановление пароля</span>
                        <div class="row">

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
                                    <input v-mask="'+7 ### #### ###'" v-model="form.phone" class="flex-grow-1" type="text"
                                        placeholder="Телефон">
                                </div>
                            </div>



                        </div>
                        <div class="section-registration__wrap-btn">
                            <button type="submit" class="btn-auth"> Восстановить </button>
                        </div>
                        <div class="section-registration__promt">
                            <span>Имеется аккаунт? <router-link to="/signIn">Войти</router-link> </span>
                        </div>
                    </form>
                </div>
            </div>
        </section>


        <section class="section-registration" v-else>
            <div class="container">
                <div class="section-registration__inner">
                    <div class="section-registration_form">
                        <div class="blue-circle"><svg width="29" height="21" viewBox="0 0 29 21" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M3 10.5L10.6667 18L26 3" stroke="white" stroke-width="6" stroke-linecap="round"
                                    stroke-linejoin="round" />
                            </svg>
                        </div>
                        <span class="form-success">Успешно</span>
                        <p>Ваш новый пароль отправлен на почту</p>
                        <router-link to="/signIn" class="btn-auth">Войти</router-link>

                    </div>
                </div>
            </div>
        </section>

    </main>
</template>
<script>
import { email, required, helpers, sameAs,minLength } from '@vuelidate/validators'
import { useVuelidate } from '@vuelidate/core'
import { restorePasswordUser } from "../api.js"
import {mask} from 'vue-the-mask'
export default {
    data() {
        return {
            form: {
                email: null,
                phone: null,
            },
            showSuccess: false,
            serverErrors:[]
        }
    },
    setup: () => ({ v$: useVuelidate({ $autoDirty: true }) }),
    directives: {mask},
    validations() {
        return {
            form: {
                email: { required: helpers.withMessage('Обязательное поле*', required), email: helpers.withMessage('Некорректный email*', email) },
                phone: { required: helpers.withMessage('Обязательное поле*', required),minLengthValue: helpers.withMessage('Мин дллина 13 символов', minLength(15)) },
            }
        }
    },
    methods: {
        async submitForm() {

            const isFormCorrect = await this.v$.$validate()
            // you can show some extra alert to the user or just leave the each field to show it's `$errors`.
            if (isFormCorrect) {
                // $restoreSuccess= await restorePasswordUser(this.form.email,this.form.password);
                let  restoreSuccess= await restorePasswordUser(this.form.email,this.form.phone);
                if (restoreSuccess) {
                    console.log(restoreSuccess);
                    this.showSuccess = true;
                }
            }
        }
    }
}
</script>

<style scoped>
.blue-circle {
    width: 72px;
    height: 72px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #40BFFF;
    border-radius: 50%;
    margin: 0px auto 16px;
}

.form-success {
    font-size: 20px;
    line-height: 22.4px;
    font-weight: 700;
    margin-bottom: 10px;
    display: block;
    text-align: center;
}

.form-success~p {
    font-size: 12px;
    font-weight: 400;
    color: #223263;
    text-align: center;
    margin-bottom: 30px;
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