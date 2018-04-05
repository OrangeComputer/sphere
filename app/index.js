import Vue from "vue/dist/vue.js";
import store from "store";

import Buefy from "buefy";
import "buefy/lib/buefy.css";

Vue.use(Buefy, { defaultIconPack: "fas" });

import { libs } from "./register";

// add axios to the Vue prototype
Object.defineProperty(Vue.prototype, "axios", { value: libs.axios });

import { globalComponents } from "./register";

for (component in globalComponents) {
  Vue.component(component, component);
}

// application
import { components } from "./register";
import router from "router";

//filters
import { filters } from "./register";

// add filters
Object.keys(filters).map(key => {
  Vue.filter(key, filters[key]);
});

var vm = new Vue({
  el: "#app",
  router,
  template: "<App/>",
  data: {
    sharedState: store.state
  },
  components
});

window.vm = vm;
