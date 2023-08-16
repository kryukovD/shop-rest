import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import Echo from 'laravel-echo';
import Pusher from 'pusher-js';
const app = createApp(App)
const appKey=import.meta.env.VITE_PUSHER_APP_KEY;
// window.Pusher = Pusher;
// let api_token='';
// if(localStorage.getItem("user")!==null){
//    api_token=JSON.parse(localStorage.getItem("user")).api_token
// }
// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: import.meta.env.VITE_PUSHER_APP_KEY,
//     cluster: import.meta.env.VITE_PUSHER_APP_CLUSTER,
//     authEndpoint:"http://shop-rest.tw1.ru/broadcasting/auth",
//     auth:{
//         headers:{
//             Accept: 'application/json',
//             Authorization:api_token
//         }
//     }
    
    
// });
app.use(router)



app.mount('#app')
