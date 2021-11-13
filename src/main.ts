import { createApp } from 'vue'
import App from '@/App.vue'
import router from "@/router/router";

const app = createApp(App)

import components from './components/UI'
components(app)


app.use(router).mount('#app')