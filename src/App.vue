<template>
  <div id="app">
    <site-header></site-header>
    <img class="logo" src="./assets/logo.png">
    <hello></hello>
    <recipes-list></recipes-list>
  </div>
</template>

<script>
import Hello from './components/Hello';
import SiteHeader from './components/SiteHeader';
import RecipesList from './components/RecipesList';
import store from './store';

export default {
  components: {
    Hello, SiteHeader, RecipesList,
  },
  methods: {
    test() {
      store.addCategory();
    },
  },
};
</script>
