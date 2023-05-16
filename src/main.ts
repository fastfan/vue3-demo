import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import svgIcon from "@/components/SvgIcon/index"
import Map from "@/components/Map/index"
import 'virtual:svg-icons-register'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component('svg-icon', svgIcon)
app.component('map-comp', Map)
app.use(ElementPlus, { size: 'small', zIndex: 3000 })

app.mount('#app')
