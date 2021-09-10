import { createApp } from 'vue';
// import elementPlus from './plugin/el-comp';
import iconPark from './plugin/icon-park';
import './config/permission';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import 'element-plus/theme-chalk/display.css';
import App from './App.vue';

import { VueClipboard } from '@soerenmartius/vue3-clipboard';

import router from './router/index';
import store from '@/store';

const app = createApp(App);

app.use(router);
app.use(store);
app.use(VueClipboard);
// 注册 elementPlus组件/插件
// elementPlus(app);
// 完整引入
app.use(ElementPlus);
// 注册字节跳动图标
iconPark(app);

app.mount('#app');
