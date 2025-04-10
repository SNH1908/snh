import { createApp } from 'vue';
import App from './App.vue';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import * as ElIcons from '@element-plus/icons-vue';
import router from './router';
import store from './store';
import { createPinia } from "pinia";
import { useUserStore } from "@/stores/user";



const app = createApp(App);
app.use(router);
app.use(ElementPlus);
app.use(store);
app.use(createPinia());

useUserStore().initAuthListener();


// 初始化 auth 监听
store.dispatch('initializeAuth');
// 全局注册所有图标
for (const [key, component] of Object.entries(ElIcons)) {
  app.component(key, component);
}



app.mount('#app');