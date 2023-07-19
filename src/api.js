import axios from 'axios'
const apiurl = import.meta.env.VITE_APP_URL
console.log(`${apiurl}/catalog?page=${1}`)
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
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
    return axios.get(`${apiurl}/catalog/categoryShow/${id}`)
}
export const getProductById = function (id) {
    return axios.get(`${apiurl}/catalog/product/${id}`)
}
export const userRegistration=function(name,email,pass){
    return  axios.post(`${apiurl}/user/registration`,{name:name,email:email,password:pass})
}

export const authorizeUser=function(email,pass){
    return axios.post(`${apiurl}/user/auth`,{email:email,password:pass});
}
export const restorePasswordUser=function(email,pass){
    return axios.post(`${apiurl}/user/edit`,{email:email,password:pass});
}

