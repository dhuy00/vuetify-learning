import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

import router from './router'
import vuetify from './plugins/vuetify' // <-- Import đúng

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(vuetify) // <-- Đăng ký Vuetify

app.mount('#app')
