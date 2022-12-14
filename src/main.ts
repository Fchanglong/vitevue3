import { createApp } from 'vue'
import './style.css'
// import "./assets/js/ai.js"
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
// createApp(App).use(router)

// createApp(App).use(router).mount('#app')
const pinia = createPinia();
const app=createApp(App)
app.use(pinia)
app.use(router)
app.mount('#app')
