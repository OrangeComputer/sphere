import Vue from "vue/dist/vue.js";
import Router from "vue-router";
import Home from "components/Home.vue";

import User from "components/User.vue";
import Users from "components/Users.vue";
import Receipt from "components/Receipt.vue";
import Receipts from "components/Receipts.vue";

Vue.use(Router);

let routes = [
  {
    path: "/",
    component: Home
  },
  {
    path: "/users",
    component: Users
  },
  {
    path: "/user/:id",
    component: User
  },
  {
    path: "/receipts",
    component: Receipts
  },
  {
    path: "/receipt/:id",
    component: Receipt
  },
  { path: "*", redirect: "/" }
];

export default new Router({
  routes
});
