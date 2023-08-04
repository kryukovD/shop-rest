<template>
    <main>
        <section class="section-add-order" v-if="!showSuccess">
            <div class="container">
                <form @submit.prevent="submitForm()">
                    <div class="section-aadd-order-form-inner">
                        <div class="section-add-form-header">
                            <span class="section-add-form-header__title"> <router-link to="/orders"><svg width="10"
                                        height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.5 16.5L1 9L8.5 1.5" stroke="#9098B1" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </router-link> Добавить товар</span>
                        </div>
                        <div class="section-add-form-body">

                            <!-- Артикул-->
                            <div class="input-block__input-wrap">
                                <label>Название</label>
                                <div class="input-block__input-wrap d-flex">
                                    <div class="wrap-errors">
                                        <div class="auth-errors" v-for="(error, index) of v$.name.$errors" :key="index">
                                            {{ error.$message }}
                                        </div>
                                    </div>
                                    <input v-model="name" class="text flex-grow-1" placeholder="Название товара">
                                </div>
                            </div>

                            <div class="input-block__input-wrap">
                                <label>Цена</label>
                                <div class="input-block__input-wrap d-flex">
                                    <div class="wrap-errors">
                                        <div class="auth-errors" v-for="(error, index) of v$.price.$errors" :key="index">
                                            {{ error.$message }}
                                        </div>
                                    </div>
                                    <input v-model="price" class="text flex-grow-1" placeholder="Цена">
                                </div>
                            </div>


                            <div class=" input-block__input-wrap">
                                <label>Детальная картинка</label>
                                <div class="wrap-errors">
                                    <div class="auth-errors" v-for="(error, index) of v$.detailFile.$errors" :key="index">
                                        {{ error.$message }}
                                    </div>
                                </div>
                                <div class="d-flex custom-file">
                                    <label class="label-load" for="detailImage">Загрузить</label>
                                    <input type="file" class="custom-file-input" id="detailImage"
                                        @change="handleFileUpload($event, 'detail')" accept="image/*">
                                    <img class="preview-image" v-bind:src="imageDetail" v-show="showDetail" />
                                </div>
                            </div>

                            <div class=" input-block__input-wrap">
                                <label>Картинка для превью</label>
                                <div class="wrap-errors">
                                    <div class="auth-errors" v-for="(error, index) of v$.previewFile.$errors" :key="index">
                                        {{ error.$message }}
                                    </div>
                                </div>
                                <div class="d-flex custom-file">
                                    <label class="label-load" for="previewImage">Загрузить</label>
                                    <input type="file" class="custom-file-input" id="previewImage"
                                        @change="handleFileUpload($event, 'preview')" accept="image/*">
                                    <img class="preview-image" v-bind:src="imagePreview" v-show="showPreview" />
                                </div>
                            </div>

                            <div class=" input-block__input-wrap">
                                <label>Доп картинки</label>
                                <svg v-if="files.length>0" @click="cleanImage()" class="clean-files" width="10" height="10" viewBox="0 0 10 10"
                                    fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M9.8106 1.10388C9.87065 1.04391 9.91829 0.972699 9.95082 0.894313C9.98334 0.815927 10.0001 0.731903 10.0002 0.647037C10.0002 0.562171 9.98355 0.478126 9.95112 0.3997C9.91869 0.321275 9.87114 0.250004 9.81117 0.189958C9.75119 0.129912 9.67998 0.0822664 9.60159 0.0497415C9.52321 0.0172166 9.43919 0.000449384 9.35432 0.000397223C9.26945 0.000345062 9.18541 0.017009 9.10698 0.0494375C9.02856 0.081866 8.95729 0.129424 8.89724 0.189396L5 4.08664L1.10388 0.189396C0.982614 0.0681278 0.818139 -1.27777e-09 0.64664 0C0.47514 1.27777e-09 0.310665 0.0681278 0.189396 0.189396C0.0681278 0.310665 1.27777e-09 0.47514 0 0.64664C-1.27777e-09 0.818139 0.0681278 0.982614 0.189396 1.10388L4.08664 5L0.189396 8.89612C0.12935 8.95616 0.0817191 9.02745 0.0492224 9.1059C0.0167257 9.18436 0 9.26844 0 9.35336C0 9.43828 0.0167257 9.52236 0.0492224 9.60082C0.0817191 9.67927 0.12935 9.75056 0.189396 9.8106C0.310665 9.93187 0.47514 10 0.64664 10C0.731557 10 0.815644 9.98327 0.894098 9.95078C0.972552 9.91828 1.04384 9.87065 1.10388 9.8106L5 5.91336L8.89724 9.8106C9.01851 9.93172 9.18293 9.99971 9.35432 9.9996C9.52571 9.9995 9.69005 9.93131 9.81117 9.81004C9.93229 9.68877 10.0003 9.52436 10.0002 9.35296C10.0001 9.18157 9.93187 9.01724 9.8106 8.89612L5.91336 5L9.8106 1.10388Z"
                                        fill="#9098B1" />
                                </svg>

                                <div class="wrap-errors">
                                    <div class="auth-errors" v-for="(error, index) of v$.files.$errors" :key="index">
                                        {{ error.$message }}
                                    </div>
                                </div>
                                <div class="d-flex custom-file">
                                    <label class="label-load" for="addionalImage">Загрузить</label>
                                    <input @change="handleFilesUpload($event)" type="file" id="addionalImage" class="custom-file-input"
                                        accept="image/*" multiple>
                                    <div class="multiply-images">
                                        <img v-for="(file, key) in files" :key="key" v-bind:ref="'image' + parseInt(key)">
                                    </div>
                                </div>
                            </div>

                        
                            <div class="input-block__input-wrap">
                                <label>Категория</label>
                                <div class="wrap-errors">
                                    <div class="auth-errors" v-for="(error, index) of v$.category.$errors" :key="index">
                                        {{ error.$message }}
                                    </div>
                                </div>


                                <select v-model="category" class="form-select" aria-label="Default select example">

                                    <template v-for="(category, index) of categories" :key="index">
                                        <option :value="category.id">{{ category.name }}</option>
                                        <option class="child-categories" :value="childCategory.id"
                                            v-for="(childCategory, indexChild) of categories[index].child_categories"
                                            :key="indexChild">&nbsp;&nbsp;{{ childCategory.name }}</option>
                                    </template>



                                </select>
                            </div>

                        <div class="input-shares d-flex flex-wrap flex-lg-nowrap ">
                            <div class="input-block__input-wrap">
                                <label>Кол-во</label>
                                <div class="input-block__input-wrap d-flex">
                                    <div class="wrap-errors">
                                        <div class="auth-errors" v-for="(error, index) of v$.quantity.$errors" :key="index">
                                            {{ error.$message }}
                                        </div>
                                    </div>
                                    <input v-model="quantity" class="text flex-grow-1" placeholder="Кол-во">
                                </div>
                            </div>

                            <div class="input-block__input-wrap">
                                <label>Время выполнения / дни</label>
                                <div class="input-block__input-wrap d-flex">
                                    <div class="wrap-errors">
                                        <div class="auth-errors" v-for="(error, index) of v$.time.$errors" :key="index">
                                            {{ error.$message }}
                                        </div>
                                    </div>
                                    <input type="number" v-model="time" class="text flex-grow-1" placeholder="Время">
                                </div>
                            </div>

                            <div class="input-block__input-wrap">
                                <label>Кэшбэк 1 заказ</label>
                                <div class="input-block__input-wrap d-flex">
                                    <div class="wrap-errors">
                                        <div class="auth-errors" v-for="(error, index) of v$.cashback.$errors" :key="index">
                                            {{ error.$message }}
                                        </div>
                                    </div>
                                    <input type="text" v-model="cashback" class="text flex-grow-1" placeholder="Сумма">
                                </div>
                            </div>
                        </div>


                        <div class="input-block__input-wrap">
                                <label>Список ключевых слов для выкупа</label>
                                <div class="input-block__input-wrap d-flex">
                                    <div class="wrap-errors">
                                        <div class="auth-errors" v-for="(error, index) of v$.keywords.$errors" :key="index">
                                            {{ error.$message }}
                                        </div>
                                    </div>
                                    <textarea v-model="keywords" class="text flex-grow-1" placeholder="Список слов" rows="8">  </textarea>
                                </div>
                            </div>

                            <div class="input-block__input-wrap">
                                <label>Условия</label>
                                <div class="input-block__input-wrap d-flex">
                                    <div class="wrap-errors">
                                        <div class="auth-errors" v-for="(error, index) of v$.conditions.$errors" :key="index">
                                            {{ error.$message }}
                                        </div>
                                    </div>
                                    <textarea v-model="conditions" class="text flex-grow-1" placeholder="Условия" rows="8">  </textarea>
                                </div>
                            </div>



                            <div class="button-wrapper">
                                <button class="d-inline-flex btn-auth " type="submit"> Добавить товар</button>
                            </div>
                            <div class="global-errors auth-errors" v-if="message !== null">
                                {{ message }}
                            </div>

                        </div>

                    </div>


                </form>
            </div>
        </section>


        <section class="section-add-order" v-else>
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
                        <p>Ваш товар товара добавлен в каталог</p>
                        <router-link :to="'/catalog/category/' + category" class="btn-auth">Перейти</router-link>

                    </div>
                </div>
            </div>
        </section>
    </main>
</template>
<script>
import { getCategories, getChildCategories, addOrderFromUser } from "../api.js"
import { email, required, helpers, sameAs, minLength, numeric, maxValue, maxLength } from '@vuelidate/validators'
import { useVuelidate } from '@vuelidate/core'
export default {
    data() {
        return {
            showSuccess: false,
            name: null,
            price: null,
            quantity: null,
            conditions:null,
            time:null,
            cashback:null,
            keywords:null,
            category: '',
            categories: [],
            showPreview: false,
            showDetail: false,
            showImages: false,
            imageDetail: '',
            imagePreview: '',
            detailFile: null,
            previewFile: null,
            files: [],
            message: null
        }
    },
    setup: () => ({ v$: useVuelidate({ $autoDirty: true }) }),
    validations() {
        return {
            name: { required: helpers.withMessage('Обязательное поле*', required) },
            price: { required: helpers.withMessage('Обязательное поле*', required), maxValueValue: helpers.withMessage('Макс число 100000', maxValue(100000)) },
            quantity: { required: helpers.withMessage('Обязательное поле*', required), maxValueValue: helpers.withMessage('Макс число 100', maxValue(100)) },
            category: { required: helpers.withMessage('Обязательное поле*', required) },
            detailFile: { required: helpers.withMessage('Обязательное поле*', required) },
            files: { maxLengthValue: helpers.withMessage('Макс картинок 3', maxLength(3)) },
            previewFile: { required: helpers.withMessage('Обязательное поле*', required) },
            conditions: { required: helpers.withMessage('Обязательное поле*', required) },
            time: { required: helpers.withMessage('Обязательное поле*', required),numeric:helpers.withMessage('Только цифры*', numeric)},
            cashback: { required: helpers.withMessage('Обязательное поле*', required),numeric:helpers.withMessage('Только цифры*', numeric) },
            keywords: { required: helpers.withMessage('Обязательное поле*', required)},


        }
    },
    created() {
        getCategories().then((response) => {
            this.categories = response.data
            this.categories.forEach((item, key) => {
                getChildCategories(item.id).then((subresponse) => {
                    this.categories[key].child_categories = subresponse.data.child_category
                })

            })
        })
    },
    methods: {
        handleFileUpload(event, type) {

            let reader = new FileReader();
            switch (type) {
                case 'detail':
                    this.detailFile = event.currentTarget.files[0];
                case 'preview':
                    this.previewFile = event.currentTarget.files[0];

            }


            reader.addEventListener("load", function () {
                switch (type) {
                    case 'detail':
                        this.showDetail = true
                        this.imageDetail = reader.result
                        break
                    case 'preview':
                        this.showPreview = true;
                        this.imagePreview = reader.result;
                        break

                }

            }.bind(this), false);
            if (this.detailFile || this.previewFile) {
                switch (type) {
                    case 'detail':
                        if (/\.(jpe?g|png|gif)$/i.test(this.detailFile.name)) {
                            reader.readAsDataURL(this.detailFile);
                        }
                        break
                    case 'preview':
                        if (/\.(jpe?g|png|gif)$/i.test(this.previewFile.name)) {
                            reader.readAsDataURL(this.previewFile);
                        }
                        break
                }

            }
        },
        handleFilesUpload(event) {
            let uploadedFiles = event.currentTarget.files;
            for (var i = 0; i < uploadedFiles.length; i++) {
                this.files.push(uploadedFiles[i]);
            }
            this.getImagePreviews();
        },

        cleanImage() {
            this.files = [];
        },

        getImagePreviews() {
            for (let i = 0; i < this.files.length; i++) {

                if (/\.(jpe?g|png|gif)$/i.test(this.files[i].name)) {

                    let reader = new FileReader();
                    reader.addEventListener("load", function () {
                        this.$refs['image' + parseInt(i)][0].src = reader.result;
                    }.bind(this), false);
                    reader.readAsDataURL(this.files[i]);
                }
            }
        },

        async submitForm() {
            let formData = new FormData();
            if (this.files.length > 0) {
                for (var i = 0; i < this.files.length; i++) {
                    let file = this.files[i];
                    formData.append('files[' + i + ']', file);
                }
            }

            formData.append("previewFile", this.previewFile);
            formData.append("detailFile", this.detailFile);
            formData.append("name", this.name)
            formData.append("price", this.price)
            formData.append("cashback",this.cashback)
            formData.append("execution_time",this.time)
            formData.append("conditions",this.conditions)
            formData.append("keywords",this.keywords)
            formData.append("item_number", this.quantity)
            formData.append("category_id", this.category)
            const isFormCorrect = await this.v$.$validate()
            // you can show some extra alert to the user or just leave the each field to show it's `$errors`.
            if (isFormCorrect) {
                addOrderFromUser(formData,JSON.parse(localStorage.getItem('user')).api_token).then( (responce)=> {
                    this.showSuccess = true
                }).catch(() => {
                    this.message = "Ошибка соединения , попробуйте позже";
                })

            }
        }

    }

}
</script>
<style scoped>
.input-shares{
    gap: 10px;
}
input[type=file] {
    display: none;
}

.label-load {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 132px;
    height: 32px;
    margin: 11px 0 0;
    padding: 8px 20px 7px;
    border-radius: 5px;
    font-family: "Inter";
    font-size: 14px;
    text-align: center;
    background-color: #40BFFF;
    color: white !important;
    cursor: pointer;
}

#file-upload-button {
    background: red;
}

.global-errors {
    margin: 20px 0px;
}

.btn-auth {
    display: inline-flex;
    margin: auto;
    width: max-content;
    justify-content: center;
}

.section-registration_form {
    text-align: center;
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

.clean-files {
    position: absolute;
    right: 20px;
    cursor: pointer;
    z-index: 2;
}

.wrap-errors {
    display: flex;
    gap: 5px;
    position: absolute;
    right: 15px;
    top: 12px;
    z-index: 1;
}

.auth-errors {
    position: static;
}


.form-select {
    position: relative;
}

.input-block__input-wrap {
    position: relative;
}

.multiply-images {
    display: flex;
    flex-wrap: wrap;
}

.multiply-images img {
    width: 100px;
    height: 100px;
    object-fit: contain;
}

.preview-image {
    width: 100px;
    height: 100px;
    object-fit: contain
}

.form-select {
    height: 52px;
    border: 1px solid #EBF0FF;
    outline: none;
}

.form-select:focus {
    box-shadow: none;
}

.button-wrapper .btn-auth {
    width: max-content;
}

.input-block__input-wrap {
    margin-bottom: 30px;
}

.section-aadd-order-form-inner {
    max-width: 736px;
}

.input-block__input-wrap input {
    width: 100%;
    outline: none;
}

.section-add-order form {
    box-shadow: 0px 0px 30px 0px #2B2A3D1A;
    border-radius: 16px;
    padding-top: 20px;
    padding-bottom: 140px;

}

.section-add-order {
    padding-top: 120px;
    padding-bottom: 180px;
}

.section-add-form-header__title a {
    margin-right: 14px;
}

.section-add-form-header__title {
    display: block;
    font-size: 20px;
    font-weight: 600;
    line-height: 24.2px;
    color: #223263;
    padding-left: 39px;
    padding-right: 39px;
    border-bottom: 1px solid #EBF0FF;
    padding-bottom: 20px;
}

.section-add-form-body {
    padding: 30px 39px 0px;
}

.input-block__input-wrap label {
    margin-bottom: 10px;
    color: #223263;
}

.input-block__input-wrap input {
    width: 100%;
    height: 52px;
    border: 1px solid #EBF0FF;
    padding-left: 16px;
    color: #9098B1;
    font-size: 16px;
    line-height: 22.4px;
}

.input-block__input-wrap input::-webkit-input-placeholder {
    color: #9098B1;
    font-size: 16px;
    line-height: 22.4px;
}
.input-block__input-wrap textarea::-webkit-input-placeholder {
    color: #9098B1;
    font-size: 16px;
    line-height: 22.4px;
}



select {
    color: #9098B1;
    font-size: 16px;
}
.input-block__input-wrap textarea{
    width: 100%;
    border: 1px solid #EBF0FF;
    padding-left: 16px;
    padding-top: 16px;
    color: #9098B1;
    font-size: 16px;
    line-height: 22.4px;
    outline: none;

}

@media (max-width:767.8px) {
    .input-shares {
        gap: 0px;
    }
    .input-shares .input-block__input-wrap{
        width:100%;
    }
    .custom-file {
        flex-wrap: wrap;
    }

    .section-add-form-header__title {
        font-size: 16px;
        line-height: 19.2px;
        padding-bottom: 20px;
    }

    .input-block__input-wrap input::-webkit-input-placeholder {
        color: #9098B1;
        font-size: 12px;
        line-height: 16.8px;
    }

    .input-block__input-wrap input {
        font-size: 12px;
        line-height: 16.8px;

    }

    select {
        color: #9098B1;
        font-size: 12px;
    }


}</style>