<template>
  <div class="cs-container">
    <div class="cs-row">
      <div class="cs-col cs-col-8-of-12">
        <add-recipe></add-recipe>
      </div>
      <div class="cs-col cs-col-4-of-12">

      </div>
    </div>
  </div>
</template>

<script>
  import AddRecipe from '../components/admin/AddRecipeForm.vue';
  export default {
    components: {
      AddRecipe,
    },
  };
</script>
