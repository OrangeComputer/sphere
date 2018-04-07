import Vue from "vue/dist/vue.js";

// Vuex store
import store from "store";

// UI components
import Buefy from "buefy";
import "buefy/lib/buefy.css";
Vue.use(Buefy, { defaultIconPack: "fas" });

// addtional libraries
import { libs } from "./register";

// add axios to the Vue prototype
Object.defineProperty(Vue.prototype, "axios", { value: libs.axios });

// main application components
import { components } from "./register";

// routes
import router from "router";

//filters
import { filters } from "./register";

// add filters
Object.keys(filters).map(key => {
  Vue.filter(key, filters[key]);
});

// instantiate Vue
var vm = new Vue({
  el: "#app",
  router,
  template: "<App/>",
  store,
  components
});

window.vm = vm;
