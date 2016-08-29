<template id="">
  <form class="add-recipe" v-on:submit.prevent="onSubmit">
    <div class="cs-row">
      <p class="cs-col cs-col-12-of-12">
        <label for="title">Recipe Name</label>
        <input type="text" name="Title" placeholder="Мусака" v-model="name">
      </p>
      <p class="cs-col cs-col-12-of-12">
        <label for="title">Ingredients</label>
        <input type="text" name="Title" placeholder="Яйца, Мляко" v-model="ingredients">
      </p>
      <p class="cs-col cs-col-12-of-12">
        <label for="title">Introduction</label>
        <textarea type="text" name="Title" placeholder="Муската е традиционна българска рецепта." v-model="intro"></textarea>
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
        <label for="title">Required Time</label>
        <input type="text" name="Title" placeholder="30m" v-model="portions">
      </p>
      <p class="cs-col cs-col-12-of-12">
        <input class="cs-btn cs-btn-blue" type="submit" name="name" value="Add Image">
      </p>
    </div>
  </form>
</template>

<script>
  import Api from '../../services/api';

  export default {
    methods: {
      addStep() {
        /* eslint-disable*/
          console.log("HAH");
        /* eslint-enable*/
        this.steps.push({
          content: '',
          thumbnail: 'http://placehold.it/960x365',
        });
      },
      onSubmit() {
        Api.addRecipe({
          name: this.name,
          preparationTime: this.preparationTime,
          portions: this.portions,
          difficulty: this.difficulty,
          preparationSteps: this.steps,
        });
        /* eslint-disable*/
          console.log(this);
        /* eslint-enable*/
      },
    },
    props: {
      name: {
        type: String,
      },
      ingredients: {
        type: Array,
      },
      intro: {
        type: String,
      },
      steps: {
        type: Array,
        default() {
          return [{
            content: '',
            thumbnail: 'http://placehold.it/960x365',
          }];
        },
      },
      outro: {
        type: String,
      },
      preparationTime: {
        type: Number,
      },
      difficulty: {
        type: String,
      },
      portions: {
        type: Number,
      },
      category: {
        type: String,
      },
    },
  };
</script>

<style media="screen">
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
