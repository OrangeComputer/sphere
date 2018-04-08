import Vue from "vue/dist/vue.js";
// Vuex store
import store from "store";

// plugins
import Buefy from "buefy";
import "buefy/lib/buefy.css";
Vue.use(Buefy, { defaultIconPack: "fas" });

// addtional libraries
import { libs } from "./register";
// add axios to the Vue prototype
Object.defineProperty(Vue.prototype, "axios", { value: libs.axios });

// main application components
import { components } from "./register";

// secondary components
import { childComponents } from "./register";

// register secondary components globally
for (let component in childComponents) {
  let splitName = component.split(/(?=[A-Z])/);
  let name = splitName
    .reduce((acc, cur) => {
      return `${acc}-${cur}`;
    })
    .toLowerCase();
  Vue.component(`${name}`, childComponents[component]);
}

// routes
import router from "router";

//filters
import { filters } from "./register";

// add filters
Object.keys(filters).map(key => {
  Vue.filter(key, filters[key]);
});

// instantiate Vue
let vm = new Vue({
  el: "#app",
  router,
  template: "<App/>",
  store,
  components
});

console.log(vm);
