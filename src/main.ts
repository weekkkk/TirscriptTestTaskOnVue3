import { createApp } from 'vue'
import App from '@/App.vue'

const app = createApp(App)

import components from './components/UI'
components(app)


app.mount('#app')