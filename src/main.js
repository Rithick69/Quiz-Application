import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@/assets/css/main.css'
import BaseCard from './components/UI/BaseCard.vue';
import BaseButton from './components/UI/BaseButton.vue';
import Fragment from 'vue-fragment';
import store from './store/store';
Vue.use(Fragment.Plugin);
Vue.config.productionTip = false
Vue.component('base-card',BaseCard);
Vue.component('base-button',BaseButton);
// Globally register your component
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
