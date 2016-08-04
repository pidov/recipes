<template>
  <div id="app">
    <site-header :navigation-items="menuItems"></site-header>
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
  data() {
    return {
      menuItems: [{
        title: 'Home',
        url: '#',
        children: [{
          title: 'Sub one',
          url: '#SubOne',
          children: [{
            title: 'Going deep',
            url: 'Deeper!',
            children: [{
              title: 'Next Level',
              url: 'Deeper!',
            }],
          }],
        }, {
          title: 'Sub Twone',
          url: '#SubOne',
        }],
      }, {
        title: 'About',
        active: true,
        url: 'SecondURL',
        children: [{
          title: 'Sub one',
          url: '#SubOne',
        }, {
          title: 'Sub one',
          url: '#SubOne',
        }],
      }],
    };
  },
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
