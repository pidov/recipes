import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/logger';
import recipes from './recipes/store';
import categories from './categories/store';

// Make vue aware of Vuex
Vue.use(Vuex);
Vue.config.debug = true;

const debug = process.env.NODE_ENV !== 'production';

// Combine the initial state and the mutations to create a Vuex store.
// This store can be linked to our app.
export default new Vuex.Store({
  modules: {
    recipes, categories,
  },
  strict: debug,
  middlewares: [createLogger()],
});
