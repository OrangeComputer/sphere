import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

import MainTemplate from './components/MainTemplate.vue';
import Home from './components/Home.vue';
import Users from './components/Users.vue';
import User from './components/User.vue';
import Receipt from './components/Receipt.vue';
import Receipts from './components/Receipts.vue';

Vue.use(VueResource);
Vue.use(VueRouter);

// export so we can use in components
export var router = new VueRouter();

// define routes
router.map({
  '/': {
    component: Home
  },
  '/users': {
    component: Users
  },
  '/user/:id': {
    component: User
  },
  '/receipts': {
    component: Receipts
  },
  '/receipt/:id': {
    component: Receipt
  }
});

// fallback route
router.redirect({
  '*': '/'
});

// // register a filter
// Vue.filter('userIdToName', function(id, users) {
//   console.log(users);
//   let user = (users.length > 0) ? users.find(u => id === u.id) : ''
//
//   if (user.hasOwnProperty('first_name'))
//     return user.frist_name + ' ' + user.last_name
//   else
//     return ''
// });

// expose the whole thing on element with 'app' as an id
router.start(MainTemplate, '#app');
