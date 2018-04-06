import Vue from "vue/dist/vue.js";
import Vuex from "vuex";
import reciept from "./modules/reciept";
import users from "./modules/users";
import products from "./modules/products";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    users,
    reciept,
    products
  }
});
