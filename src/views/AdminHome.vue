<template>
  <add-recipe></add-recipe>
  <list-recipes></list-recipes>
</template>

<script>
  import AddRecipe from '../components/admin/AddRecipeForm.vue';
  import ListRecipes from '../components/admin/ListRecipes.vue';
  export default {
    components: {
      AddRecipe, ListRecipes,
    },
  };
</script>
