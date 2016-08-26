import Vue from 'vue';
import HomeView from './views/Home';
import AdminHomeView from './views/AdminHome';
import RecipeView from './views/Recipe';
import RecipesView from './views/Recipes';
import MainLayout from './layouts/Main';
import AdminLayout from './layouts/AdminMain';

import VueRouter from 'vue-router';

Vue.use(VueRouter);

const App = Vue.extend({});

const router = new VueRouter({
  history: true,
});

router.map({
  '/': {
    component: MainLayout,
    subRoutes: {
      '/': {
        component: HomeView,
      },
      '/recipes': {
        component: RecipesView,
      },
      '/recipes/:slug': {
        component: RecipeView,
      },
    },
  },
  admin: {
    component: AdminLayout,
    subRoutes: {
      '/': {
        component: AdminHomeView,
      },
      '/recipes': {
        component: RecipesView,
      },
      '/recipes/:slug': {
        component: RecipeView,
      },
    },
  },
});

router.start(App, 'body');
