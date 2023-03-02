import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from './store/index';
import Vuelidate from 'vuelidate'
import VueMask from 'v-mask'
import VModal from 'vue-js-modal'

Vue.use(Vuelidate);
Vue.use(VueMask);
Vue.use(VModal)

var VueScrollTo = require('vue-scrollto');
Vue.use(VueScrollTo, {
  offset: -60,
})

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
