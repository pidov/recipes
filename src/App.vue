<template>
  <div id="app">
    <site-header :navigation-items="menuItems"></site-header>
    <div class="cs-recipe-top-categories">
      <div class="cs-container">
        <h3 class="cs-headline"><span>Recipe categories</span></h3>
        <div class="cs-row">
          <div v-for="teaser in teasers" class="cs-col cs-col-4-of-12">
          <small-teaser
            :title="teaser.title"
            :subtitle="teaser.subtitle"
            :background-image="teaser.backgroundImage"
            :permalink="teaser.permalink"></small-teaser>
          </div>
        </div>
      </div>
    </div>
    <recipes-list :recipes="recipes"></recipes-list>
  </div>
</template>

<script>
  import Hello from './components/Hello';
  import SiteHeader from './components/SiteHeader';
  import RecipesList from './components/RecipesList';
  import SmallTeaser from './components/SmallTeaser';

  export default {
    data() {
      return {
        recipes: [{
          title: ' Musaka',
          backgroundImage: 'http://www.freedigitalphotos.net/images/img/homepage/87357.jpg',
          permalink: 'http://google.com',
        }, {
          title: 'Musakata',
          backgroundImage: 'http://www.freedigitalphotos.net/images/img/homepage/87357.jpg',
          permalink: 'http://google.com',
        }, {
          title: 'Musaka',
          backgroundImage: 'http://www.freedigitalphotos.net/images/img/homepage/87357.jpg',
          permalink: 'http://google.com',
        }, {
          title: 'Musakata',
          backgroundImage: 'http://www.freedigitalphotos.net/images/img/homepage/87357.jpg',
          permalink: 'http://google.com',
        }],
        teasers: [{
          title: ' Musaka',
          backgroundImage: 'http://www.freedigitalphotos.net/images/img/homepage/87357.jpg',
          permalink: 'http://google.com',
        }, {
          title: 'Musakata',
          backgroundImage: 'http://www.freedigitalphotos.net/images/img/homepage/87357.jpg',
          permalink: 'http://google.com',
        }, {
          title: 'Musaka',
          backgroundImage: 'http://www.freedigitalphotos.net/images/img/homepage/87357.jpg',
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
      Hello, SiteHeader, RecipesList, SmallTeaser,
    },
  };
</script>
