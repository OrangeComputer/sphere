import Vue from "vue/dist/vue.js";

// libs
import axios from "axios";

Object.defineProperty(Vue.prototype, "axios", { value: axios });

// frameworks: CSS
import Bulma from "bulma";

// application
import { components } from "./register";
import router from "./router";

new Vue({
  el: "#app",
  router,
  template: "<App/>",
  components
});
