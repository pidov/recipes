<template>
  <categories-container
    :categories="teasers"
    title="Recipe Categories">
  </categories-container>
  <recipes-list
    :recipes="recipes"
    title="Popular recipes">
  </recipes-list>
</template>


<script>
  import RecipesList from '../containers/RecipesListContainer';
  import CategoriesContainer from '../containers/CategoriesContainer';
  import { getAllRecipes } from '../vuex/recipes/actions';
  export default {
    vuex: {
      getters: {
        recipes: ({ recipes }) => recipes.all,
      },
      actions: {
        getAllRecipes,
      },
    },
    created() {
      this.getAllRecipes();
    },
    components: {
      RecipesList, CategoriesContainer,
    },
  };
</script>
