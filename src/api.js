import axios from 'axios'
const apiurl = import.meta.env.VITE_APP_URL
// axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
export const getAllProducts = function () {
    return axios.get(`${apiurl}/catalog`)
}
export const getProductsCategory = function (id, page) {
    return axios.get(`${apiurl}/catalog/category/${id}?page=${page}`)
}
export const getPaginateProducts = function (page) {
    return axios.get(`${apiurl}/catalog?page=${page}`)
}
export const getCategories = function () {
    return axios.get(`${apiurl}/catalog/categories`)
}
export const getCategoryById =function(id){
    return axios.get(`${apiurl}/catalog/categories/${id}`)
}
export const getCurrentCategory = function (id) {
    return axios.get(`${apiurl}/catalog/${id}`)
}
export const getProductById = function (id) {
    return axios.get(`${apiurl}/catalog/product/${id}`)
}
export const getChildCategories=function(id){
    return axios.get(`${apiurl}/catalog/categories/${id}`)
}
export const userRegistration=function(name,email,phone,pass,confirmPass){
    return  axios.post(`${apiurl}/user/registration`,{name:name,email:email,phone:phone,password:pass,password_confirmation:confirmPass})
}

/*Создание товара пользователем */
export const addOrderFromUser=function(formData,api_token){
    return axios.post(`${apiurl}/catalog/productAdd`,formData,{headers:{'Content-Type': 'multipart/form-data','Authorization':api_token}});
}
/** Нужен токен */
export const addOrderToUser =function(id,api_token){
    return axios.post(`${apiurl}/catalog/product/${id}/createBid`,{},{headers:{'Authorization':api_token}})
}
/* Получение всех товаров */
export const getAllProductsForUsers =function(api_token){
    return axios.get(`${apiurl}/user/allBids`,{headers:{'Authorization':api_token}})
}

/*Получение товаров , которые пользователь продает */
export const getProductsUserSelling=function(){
    return axios.get(`${apiurl}/user/selling`)
}


export const authorizeUser=function(email,pass){
    return axios.post(`${apiurl}/user/auth`,{email:email,password:pass});
}
export const restorePasswordUser=function(email,phone){
    return axios.post(`${apiurl}/user/passwordReset`,{email:email,phone:phone});
}

/*Чат */
export const addToChat=function(id,api_token){
    return axios.post(`${apiurl}/catalog/product/${id}/createChat`,{},{headers:{'Authorization':api_token}});
   
}
/*Получаем все контакты  */
export const getAllContacts=function(api_token){
    return axios.get(`${apiurl}/contacts`,{headers:{'Authorization':api_token}});
}

