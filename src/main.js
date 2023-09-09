import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store' 
import components1 from '@/components/UI';
const app = createApp(App);
app.use(router).use(store).mount('#app');
components1.forEach(component => {app.component(component.name, component)});


// createApp(App).use(store).use(router).mount('#app')

