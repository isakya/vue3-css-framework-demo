import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
// 重置浏览器样式
import 'normalize.css/normalize.css'

createApp(App).use(store).use(router).mount("#app")
