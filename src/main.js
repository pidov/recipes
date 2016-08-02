import Vue from 'vue';
import AppComponent from './App';

import VueRouter from 'vue-router';

Vue.use(VueRouter);

const App = Vue.extend({});

const router = new VueRouter();

router.map({
  '/': {
    component: AppComponent,
  },
  '/bar': {
    component: AppComponent,
  },
});

router.start(App, 'body');
