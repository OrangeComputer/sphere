import Vue from "vue/dist/vue.js";
import Buefy from "buefy";
import "buefy/lib/buefy.css";

Vue.use(Buefy, { defaultIconPack: "fas" });

import { libs } from "./register";

// add libs to the Vue prototype
Object.keys(libs).map(key => {
  Object.defineProperty(Vue.prototype, key, { value: libs[key] });
});

import { globalComponents } from "./register";

for (component in globalComponents) {
  Vue.component(component, component);
}

// frameworks: CSS
import Bulma from "bulma";

// application
import { components } from "./register";
import router from "./router";

var vm = new Vue({
  el: "#app",
  router,
  template: "<App/>",
  components
});

window.vm = vm;
