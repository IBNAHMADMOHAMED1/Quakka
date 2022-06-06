import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import bootstrap from '@/assets/css/bootstrap.min.css'
import glightbox from '@/assets/css/glightbox.min.css'
import main from '@/assets/css/main.css'
import tinyslider from '@/assets/css/tiny-slider.css'
import LineIcons from '@/assets/css/LineIcons.3.0.css'
// import LineIcons from '@/assets/fonts/LineIcons.eot'
import bbootstrap from '@/assets/js/bootstrap.min.js'
import bglightbox from '@/assets/js/glightbox.min.js'
// import bmain from '@/assets/js/main.js'





createApp(App).use(store).use(router).mount('#app')

