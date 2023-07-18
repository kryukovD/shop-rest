import axios from 'axios'
const apiurl = import.meta.env.VITE_APP_URL
console.log(`${apiurl}/catalog?page=${1}`)
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
export const getAllProducts = function () {
    return axios.get(`${apiurl}/catalog`)
}
export const getProductsCategory = function (id, page) {
    return axios.get(`${apiurl}/catalog/${id}/products?page=${page}`)
}

export const getPaginateProducts = function (page) {
    return axios.get(`${apiurl}/catalog?page=${page}`)
}

export const getCategories = function () {
    return axios.get(`${apiurl}/catalog/categories`)
}
export const getCurrentCategory = function (id) {
    return axios.get(`${apiurl}/catalog/${id}`)
}
export const getProductById = function (id) {
    return axios.get(`${apiurl}/catalog/product/${id}`)
}
