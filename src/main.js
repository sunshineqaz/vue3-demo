import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import service from './utils/requests'

const app = createApp(App)

app.config.globalProperties.$service = service

app.use(router)
app.use(ElementPlus)

app.mount('#app')
