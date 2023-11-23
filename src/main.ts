import './assets/main.css'

import { createApp } from 'vue'

import App from './App.vue'
import router from './router'

import ripplePlugin from './ripplePlugin'

const app = createApp(App)

app.use(router)
console.log("🚀 ~ file: main.ts:13 ~ app:", app)

app.use(ripplePlugin)

app.mount('#app')
