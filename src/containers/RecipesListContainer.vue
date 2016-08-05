<template>
<!-- Main content -->
<div class="cs-container">
  <!-- Main content -->
  <div class="cs-main-content">
    <!-- Recipes category -->
    <h3 class="cs-headline">
      <span>{{title}}</span>
    </h3>
    <div class="cs-recipes-category four-recipes">
      <ul class="cs-recipes">
        <!-- Recipe -->
        <recipe-teaser v-for="recipe in recipes"
          :permalink="recipe.permalink"
          :title="recipe.title"
          :portion="recipe.portion"
          :preparation-time="recipe.preparationTime"
          :background-image="recipe.backgroundImage"
        >
        </recipe-teaser>
      </ul>
    </div><!-- end .cs-recipes-category -->
  </div>
</div>
</template>

<script>
  import RecipeTeaser from '../components/RecipeTeaser';

  export default {
    props: ['recipes', 'title'],
    components: {
      RecipeTeaser,
    },
  };
</script>
