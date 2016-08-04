<template>
  <div id="app">
    <site-header :navigation-items="menuItems"></site-header>
    <img class="logo" src="./assets/logo.png">
    <hello></hello>
    <recipes-list></recipes-list>
    <div class="cs-recipe-top-categories">
      <div class="cs-container">
        <h3 class="cs-headline"><span>Recipe categories</span></h3>
        <div class="cs-row">
          <div class="cs-col cs-col-4-of-12">
          <small-teaser
            title="Musakinq"
            image="http://www.freedigitalphotos.net/images/img/homepage/87357.jpg"
            url="http://google.com"></small-teaser>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Hello from './components/Hello';
  import SiteHeader from './components/SiteHeader';
  import RecipesList from './components/RecipesList';
  import SmallTeaser from './components/SmallTeaser';
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
      Hello, SiteHeader, RecipesList, SmallTeaser,
    },
    methods: {
      test() {
        store.addCategory();
      },
    },
  };
</script>
