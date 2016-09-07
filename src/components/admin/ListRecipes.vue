<template id="">
  <table>
    <tr>
      <th>
        Title
      </th>
      <th>
        Published
      </th>
    </tr>
    <tr v-for="recipe in recipes">
      <td>
        <a v-link="{ path: recipe.slug }">
          {{recipe.title}}
        </a>
      </td>
      <td>
        {{recipe.published}}
      </td>
    </tr>
  </table>
</template>

<script>
  import api from '../../api';

  export default {
    data() {
      return {
        recipes: [],
      };
    },
    ready() {
      api.getRecipes((recipes) => {
        console.log(recipes);
        this.recipes = recipes;
      });
    },
  };
</script>
