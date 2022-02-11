import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "@/assets/style.css";
import appHeader from "@/components/Shared/appHeader";
import appBookmarkList from "@/components/Shared/appBookmarkList";

createApp(App).component('appBookmarkList',appBookmarkList).component('appHeader',appHeader).use(store).use(router).mount('#app')
