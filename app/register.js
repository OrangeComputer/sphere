// components
import App from "./src/App.vue";
import User from "components/User.vue";
import Users from "components/Users.vue";
import Receipts from "components/Receipts.vue";
import Receipt from "components/Receipt.vue";

// global components
import UserModal from "globalComponents/UserModal.vue";

// libs
import axios from "axios";

let filters = {
  capitalise: function(value) {
    if (!value) return "";
    value = value.toString();
    return value.charAt(0).toUpperCase() + value.slice(1);
  },
  formatDate: function(value) {
    let breakPoint = " ";
    if (!value) return "";
    if (value.indexOf("T")) {
      breakPoint = "T";
    }
    return value.slice(0, value.indexOf(breakPoint));
  }
};

let components = { App, User, Users, Receipt, Receipts };
let globalComponents = {};
let libs = { axios };

export { components, globalComponents, libs, filters };
