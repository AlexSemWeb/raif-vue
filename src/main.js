import Vue from "vue";
import VueTheMask from "vue-the-mask";
import "@/assets/sass/style.scss";
import App from "./App.vue";

Vue.config.productionTip = false;
Vue.use(VueTheMask);
new Vue({
  render: (h) => h(App),
}).$mount("#app");
