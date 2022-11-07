import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Vuelidate from 'vuelidate'
import VueMask from 'v-mask'

Vue.use(Vuelidate);
Vue.use(VueMask);

var VueScrollTo = require('vue-scrollto');
Vue.use(VueScrollTo, {
  offset: -60,
})

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
