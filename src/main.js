import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "@/assets/style.css";
import appHeader from "@/components/Shared/appHeader";
import appBookmarkList from "@/components/Shared/appBookmarkList";
import {appAxios} from '@/utils/appAxios.js';

const app = createApp(App);
app.component('appBookmarkList',appBookmarkList);
app.component('appHeader',appHeader);
app.use(store);
app.use(router);
app.config.globalProperties.$appAxios = appAxios;
app.mount('#app');
