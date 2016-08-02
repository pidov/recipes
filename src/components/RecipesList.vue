<template>
<!-- Main content -->
<div class="cs-container">
  <!-- Main content -->
  <div class="cs-main-content">
    <!-- Recipes category -->
    <h3 class="cs-headline"><span>Popular recipes</span></h3>
    <div class="cs-recipes-category four-recipes">
      <ul class="cs-recipes">
        <!-- Recipe -->
        <li class="cs-recipe" v-for="recipe in recipes">
          <div class="cs-recipe-image">
            <div class="cs-recipe-details-button">
              <a href="recipe_single_layout_1.html">Details</a>
            </div>
            <img v-bind:src="recipe.images.thumbnail" alt="Bakery">
          </div>
          <div class="cs-recipe-meta">
            <span><i class="fa fa-hourglass-half"></i> {{recipe.prepTime}} Minutes</span> <!-- TODO: Add timeago -->
            <span><i class="fa fa-cutlery"></i> {{recipe.portions}} Persons</span>
          </div>
          <h3><a href="recipe_single_layout_1.html">{{recipe.name}}</a></h3>
        </li><!-- end .cs-recipe -->
      </ul>
    </div><!-- end .cs-recipes-category -->
  </div>
</div>

<form v-on:submit.prevent="addRecipe">
  <input type="text" v-model="recipe.name" id="test">
  <input type="text" v-model="recipe.prepTime" id="test1">
  <input type="text" v-model="recipe.portions" id="test2">
  <input type="text" v-model="recipe.images.thumbnail" id="test3">
  <input type="submit" value="go"/>
</form>
</template>

<script>
  import store from '../store';

  export default {
    data() {
      return {
        recipe: {
          name: '',
          prepTime: '',
          portions: '',
          createdAt: new Date(),
          images: {
            thumbnail: '',
          },
        },
        recipes: {

        },
      };
    },

    created() {
      store.on('recipes-updated', this.updateRecipes);
    },

    methods: {
      updateRecipes(recipes) {
        this.recipes = recipes;
      },
      addRecipe() {
        console.log(this.recipe);
        store.addRecipe(this.recipe);
      },
    },
  };
</script>
