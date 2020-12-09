import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import ApiService from './services/api.service';

const moment = require('moment');
require('moment/locale/fr');

Vue.config.productionTip = false;
ApiService.setAxiosInterceptor();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');

Vue.use(require('vue-moment'), {
  moment
});
