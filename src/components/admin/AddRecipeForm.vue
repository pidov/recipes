<template id="">
  <form class="add-recipe" v-on:submit.prevent="onSubmit">
    <p class="cs-col cs-col-12-of-12">
      <input type="text" name="Title" autocomplete="off" placeholder="Въведи име..." v-model="name" class="form-element-title">
    </p>
    <p class="cs-col cs-col-12-of-12">
      <label for="title">Ingredients</label>
      <input type="text" name="Title" placeholder="Яйца, Мляко" v-model="ingredients">
    </p>
    <p class="cs-col cs-col-6-of-12">
      <label for="title">Introduction</label>
      <textarea type="text" name="Title" placeholder="Муската е традиционна българска рецепта." v-model="intro"></textarea>
    </p>
    <p class="cs-col cs-col-6-of-12">
      <label for="title">Preview</label>
      <vue-markdown :source="intro"></vue-markdown>
    </p>
    <div class="cs-col cs-col-12-of-12">
      <div v-for="step in steps" class="cs-row step">
        <p class="cs-col cs-col-8-of-12">
          <label for="title">Steps</label>
          <textarea type="text" name="Title" placeholder="Първа стъпка от.." v-model=step.content></textarea>
        </p>
        <div class="cs-col cs-col-4-of-12">
          <div class="thumbnail-add">
            <label for="title">Image</label>
            <img v-bind:src="step.thumbnail" alt="" />
            <a class="cs-btn cs-btn-blue" >Add Step</a>
          </div>
        </div>
      </div>
      <a class="cs-btn cs-btn-blue" v-on:click="addStep">Add Step</a>
    </div>
    <p class="cs-col cs-col-12-of-12">
      <label for="title">Outro</label>
      <textarea type="text" name="Title" placeholder="За да направите мусаката по-вкусна..." v-model="outro"></textarea>
    </p>
    <p class="cs-col cs-col-3-of-12">
      <label for="title">Required Time</label>
      <input type="text" name="Title" placeholder="30m" v-model="preparationTime">
    </p>
    <p class="cs-col cs-col-3-of-12">
      <label for="title">Difficulty</label>
      <input type="text" name="Title" placeholder="Easy" v-model="difficulty">
    </p>
    <p class="cs-col cs-col-3-of-12">
      <label for="title">Category</label>
      <input type="text" name="Title" placeholder="Месни" v-model="category">
    </p>
    <p class="cs-col cs-col-3-of-12">
      <label for="title">Portions</label>
      <input type="text" name="Title" placeholder="4" v-model="portions">
    </p>
    <p class="cs-col cs-col-12-of-12">
      <input class="cs-btn cs-btn-blue" type="submit" name="name" value="Submit">
    </p>
  </form>
</template>

<script>
  import api from '../../api';
  import VueMarkdown from 'vue-markdown';

  const getInitialData = function getInitialData() {
    return {
      name: '',
      ingredients: '',
      intro: '',
      steps: [{
        content: '',
        thumbnail: 'http://placehold.it/960x365',
      }],
      outro: '',
      preparationTime: '',
      difficulty: '',
      portions: '',
      category: '',
    };
  };

  export default {
    data() {
      return getInitialData();
    },
    methods: {
      addStep() {
        this.steps.push({
          content: '',
          thumbnail: 'http://placehold.it/960x365',
        });
      },
      clear() {
        this.$data = getInitialData();
      },
      onSubmit() {
        const ingredients = this.ingredients && this.ingredients.split(',') || [];
        api.addRecipe({
          title: this.name,
          ingredients,
          introduction: this.intro,
          preparationSteps: this.steps,
          outro: this.outro,
          preparationTime: this.preparationTime,
          difficulty: this.difficulty,
          category: this.category,
          portions: this.portions,
        }, (err, response) => {
          if (err) return err;
          this.clear();
          return response;
        });
      },
    },
    components: {
      VueMarkdown,
    },
  };
</script>

<style media="screen">
  .add-recipe {
    height: 300px;
    padding: 20px;
    overflow-y: scroll;
    position: fixed;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 2;
    background: #f2f2f2;
    box-shadow: 0px 10px 20px 20px rgba(0,0,0,.2);
  }

  input[type="text"].form-element-title{
    padding: 10px 0;
    background: transparent;
    border: none;
    font-size: 24px;
  }
  .thumbnail-add {
    text-align: center;
  }
  .step textarea  {
    min-height: 0;
    height: 131px;
  }
  .thumbnail-add img {
    margin-bottom: 20px;
  }

</style>
