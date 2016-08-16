import Vue from 'vue';
import Home from './views/Home';
import MainLayout from './layouts/Main';

import VueRouter from 'vue-router';

Vue.use(VueRouter);

const App = Vue.extend({});

const router = new VueRouter();

router.map({
  '/': {
    component: MainLayout,
    subRoutes: {
      '/': {
        component: Home,
      },
    },
  },
});

router.start(App, 'body');
