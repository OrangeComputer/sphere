import Vue from "vue/dist/vue.js";
import Router from "vue-router";
import { components } from "../register";

let _ = components;

Vue.use(Router);

let routes = [
  {
    path: "/",
    component: _.Home
  },
  {
    path: "/users",
    component: _.Users
  },
  {
    path: "/user/:id",
    component: _.User
  },
  {
    path: "/user-search",
    component: _.UserSearch
  },
  {
    path: "/receipts",
    component: _.Receipts
  },
  {
    path: "/receipt/:id",
    component: _.Receipt
  },
  { path: "*", redirect: "/" }
];

export default new Router({
  routes
});
