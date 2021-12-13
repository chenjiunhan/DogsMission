import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const dogApp = createApp(App).use(router)
dogApp.use(router)
      .mount('#app')

