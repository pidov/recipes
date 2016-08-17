<template>
  <recipes-list
    :recipes="recipes"
    title="Popular recipes">
  </recipes-list>
</template>

<script>
  import RecipesList from '../containers/RecipesListContainer';
  import CategoriesContainer from '../containers/CategoriesContainer';

  export default {
    data() {
      return {
        recipes: [{
          title: 'Musaka',
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
      };
    },
    components: {
      RecipesList, CategoriesContainer,
    },
  };
</script>
