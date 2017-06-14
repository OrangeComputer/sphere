import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

import MainTemplate from './components/MainTemplate.vue';
import Home from './components/Home.vue';
import Users from './components/Users.vue';
import User from './components/User.vue';
// import Receipt from './components/Receipt.vue';
// import Receipt from './components/Receipt.vue';

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
  }
  // '/receipts': {
  //   component: Receipt
  // },
  // '/receipts/:id': {
  //   component: Receipt
  // }
});

// fallback route
router.redirect({
  '*': '/'
});

// register a filter
// Vue.filter('authorIdToName', function(id, authors) {
//
//   let author = (authors.length > 0) ? authors.find(a => id === a.id) : ''
//
//   if (author.hasOwnProperty('name'))
//     return author.name
//   else
//     return ''
// });

// expose the whole thing on element with 'app' as an id
router.start(MainTemplate, '#app');
