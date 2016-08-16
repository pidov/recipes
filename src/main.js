import Vue from 'vue';
import HomeView from './views/Home';
import RecipeView from './views/Recipe';
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
        component: HomeView,
      },
      '/recipes/:slug': {
        component: RecipeView,
      },
    },
  },
});

router.start(App, 'body');
