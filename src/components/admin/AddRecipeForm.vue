<template id="">
  <form class="add-recipe" action="index.html" method="post">
    <div class="cs-row">
      <p class="cs-col cs-col-12-of-12">
        <label for="title">Recipe Name</label>
        <input type="text" name="Title" placeholder="Musaka">
      </p>
      <p class="cs-col cs-col-12-of-12">
        <label for="title">Introduction</label>
        <textarea type="text" name="Title" placeholder="Musakata e mnogo lesna"></textarea>
      </p>
      <div class="cs-col cs-col-12-of-12">
        <div class="cs-row step">
          <p class="cs-col cs-col-8-of-12">
            <label for="title">Steps</label>
            <textarea type="text" name="Title" placeholder="Musakata e mnogo lesna"></textarea>
          </p>
          <div class="cs-col cs-col-4-of-12">
            <div class="thumbnail-add">
              <label for="title">Image</label>
              <img src="http://placehold.it/960x365" alt="" />
              <input class="cs-btn cs-btn-blue" type="button" name="name" value="Add Image">
            </div>
          </div>
        </div>
      </div>
      <p class="cs-col cs-col-4-of-12">
        <label for="title">Required Time</label>
        <input type="text" name="Title" placeholder="30m">
      </p>
      <p class="cs-col cs-col-4-of-12">
        <label for="title">Difficulty</label>
        <input type="text" name="Title" placeholder="Easy">
      </p>
      <p class="cs-col cs-col-4-of-12">
        <label for="title">Category</label>
        <input type="text" name="Title" placeholder="30m">
      </p>
    </div>

  </form>
</template>

<script>
  export default {

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
