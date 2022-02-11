import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "@/assets/style.css";
import appHeader from "@/components/Shared/appHeader";

createApp(App).component('appHeader',appHeader).use(store).use(router).mount('#app')
