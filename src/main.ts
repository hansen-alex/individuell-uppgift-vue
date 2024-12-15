import { createApp } from 'vue'
import './style.css'
import router from './router'
import { createPinia } from 'pinia'
import App from './App.vue'
import { useAuthStore } from './stores/auth'

const app = createApp(App);
app
 .use(createPinia())
 .use(router);
    
const authStore = useAuthStore();
app.provide("authStore", authStore);

app.mount('#app')