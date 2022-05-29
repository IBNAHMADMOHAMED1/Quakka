import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

import './assets/css/tailwind.css'
import './assets/css/style.css'




createApp(App).use(store).use(router).use(VueSweetalert2).mount('#app')
