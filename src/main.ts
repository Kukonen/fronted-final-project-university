import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/router'

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import store from './store/store'

const app = createApp(App);

app.use(store)

app.use(router);

app.mount('#app');
