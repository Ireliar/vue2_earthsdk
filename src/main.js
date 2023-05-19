import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

import "@/base/index.css";

function startUp() {
  new Vue({
    router,
    store,
    render: (h) => h(App),
  }).$mount("#app");
}

// eslint-disable-next-line no-undef
XE.ready().then(startUp);
