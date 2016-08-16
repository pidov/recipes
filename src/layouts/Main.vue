<template>
  <div id="app">
    <site-header
      :navigation-items="menuItems">
    </site-header>
      <router-view></router-view>
    <site-footer>
    </site-footer>
  </div>
</template>

<script>
  import Hello from '../components/Hello';
  import SiteHeader from '../components/SiteHeader';
  import RecipesList from '../containers/RecipesListContainer';
  import CategoriesContainer from '../containers/CategoriesContainer';
  import SiteFooter from '../containers/SiteFooterContainer';
  import CheckList from '../components/CheckList';
  import StepsList from '../components/StepsList';
  import PageTitle from '../components/PageTitle';

  export default {
    data() {
      return {
        pageTitle: {
          title: 'Musaka po banski',
          breadcrumbs: [{
            title: 'Az Recepti',
            permalink: 'https://google.com/ncr',
          }, {
            title: 'Recepti s kartofi',
            permalink: 'https://google.com/',
          }],
        },
        stepsList: {
          title: 'Preparation',
          items: [{
            title: 'Preparation',
            duration: '30 minutes',
            body: '<b> THis is bolded preparation step</b>',
          }, {
            title: 'Cooking',
            duration: '30 minutes',
            thumbnail: 'http://placehold.it/960x635',
            body: 'This is not',
          }],
        },
        checkList: {
          title: 'Ingredients',
          items: [{
            title: '4 eggs',
            checked: false,
          }, {
            title: '300ml milk',
            checked: false,
          }, {
            title: '2 potatoes eggs',
            checked: true,
          }, {
            title: 'lulzs',
            checked: false,
          }],
        },
        recipes: [{
          title: ' Musaka',
          preparationTime: 50,
          portion: 1,
          backgroundImage: 'https://placehold.it/600x600',
          permalink: 'http://google.com',
        }, {
          title: 'Musakata',
          preparationTime: 20,
          portion: 4,
          backgroundImage: 'https://placehold.it/600x600',
          permalink: 'http://google.com',
        }, {
          title: 'Musaka',
          preparationTime: 30,
          portion: 2,
          backgroundImage: 'https://placehold.it/600x600',
          permalink: 'http://google.com',
        }, {
          title: 'Musakata',
          preparationTime: 60,
          portion: 4,
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
      SiteFooter, CheckList, StepsList, PageTitle,
    },
  };
</script>
