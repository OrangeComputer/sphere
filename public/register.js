// /components
import App from "./src/App.vue";
import User from "components/User.vue";
import Users from "components/Users.vue";
import Receipts from "components/Receipts.vue";
import Receipt from "components/Receipt.vue";

// libs
import axios from "axios";

let components = { App, User, Users, Receipt, Receipts };
let globalComponents = {};
let libs = { axios };

export { components, globalComponents, libs };
