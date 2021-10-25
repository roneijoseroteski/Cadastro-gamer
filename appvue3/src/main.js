import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'normalize.css/normalize.css'
import moment from 'moment';

const app = createApp(App);

app.use(router);
app.config.globalProperties.$moment=moment;


app.mount('#app')
// createApp(App).use(router).mount('#app')
