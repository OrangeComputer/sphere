/**
 * Register components, child components, libraries and filters here.
 * This allows things the Vue instance may need to be registered globally for
 * easier maintainability.
 *
 * The values are exported and used in main.js
 */

/***************************
 *       Components        *
 ***************************/

import * as main from "./src/components"; // using the wildcard babel plugin @see .babelrc

// additional

import App from "./src/App.vue";

// combine

let components = { ...main, App };

/***************************
 *     Child Components    *
 ***************************/

import * as children from "./src/childComponents";

// additional

import Vuetable from "vuetable-2";

// combine

let childComponents = { ...children, Vuetable };

/***************************
 *       Libraries         *
 ***************************/

import axios from "axios";

let libs = { axios };

/***************************
 *         Filters         *
 ***************************/

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

// fin
export { components, childComponents, libs, filters };
