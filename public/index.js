// frameworks: JS
import Vue from "vue/dist/vue.js";
import Axios from 'axios';

// frameworks: CSS
import Bulma from "bulma";

// transpiling sass modules into build.js
import Scss from "./styles/app.scss";

// application
import App from "./src/App.vue";
import router from "./router";

new Vue({
  el: "#app",
  router,
  template: "<App/>",
  components: { App }
});