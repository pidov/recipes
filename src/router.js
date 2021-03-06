import Vue from 'vue';
import VueRouter from 'vue-router';

import HomeView from './views/Home';
import AdminHomeView from './views/AdminHome';
import RecipeView from './views/Recipe';
import RecipesView from './views/Recipes';
import CategoryView from './views/Category';
import CategoriesView from './views/Categories';
import MainLayout from './layouts/Main';
import AdminLayout from './layouts/AdminMain';

Vue.use(VueRouter);

const router = new VueRouter({
  history: true,
  saveScrollPosition: true,
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
      '/category': {
        component: CategoriesView,
      },
      '/category/:slug': {
        component: CategoryView,
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

export default router;
