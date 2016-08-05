<template>
  <div id="app">
    <site-header
      :navigation-items="menuItems">
    </site-header>
    <categories-container
      :categories="teasers"
      title="Recipe Categories">
    </categories-container>
    <recipes-list
      :recipes="recipes">
    </recipes-list>
  </div>
</template>

<script>
  import Hello from './components/Hello';
  import SiteHeader from './components/SiteHeader';
  import RecipesList from './components/RecipesList';
  import CategoriesContainer from './containers/CategoriesContainer';

  export default {
    data() {
      return {
        recipes: [{
          title: ' Musaka',
          backgroundImage: 'https://placehold.it/600x600',
          permalink: 'http://google.com',
        }, {
          title: 'Musakata',
          backgroundImage: 'https://placehold.it/600x600',
          permalink: 'http://google.com',
        }, {
          title: 'Musaka',
          backgroundImage: 'https://placehold.it/600x600',
          permalink: 'http://google.com',
        }, {
          title: 'Musakata',
          backgroundImage: 'https://placehold.it/600x600',
          permalink: 'http://google.com',
        }],
        teasers: [{
          title: ' Musaka',
          backgroundImage: 'https://placehold.it/328x120',
          permalink: 'http://google.com',
        }, {
          title: 'Musakata',
          backgroundImage: 'https://placehold.it/328x120',
          permalink: 'http://google.com',
        }, {
          title: 'Musaka',
          backgroundImage: 'https://placehold.it/328x120',
          permalink: 'http://google.com',
        }],
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
      Hello, SiteHeader, RecipesList, CategoriesContainer,
    },
  };
</script>
