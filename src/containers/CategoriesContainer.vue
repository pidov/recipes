<template>
  <div class="cs-recipe-top-categories">
    <div class="cs-container">
      <h3 class="cs-headline">
        <span>
          {{title}}
        </span>
      </h3>
      <div class="cs-row">
        <div v-for="teaser in categories" class="cs-col cs-col-4-of-12">
          <small-teaser
            :title="teaser.title"
            :subtitle="teaser.subtitle"
            :background-image="teaser.backgroundImage"
            :permalink="teaser.permalink"></small-teaser>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import SmallTeaser from '../components/SmallTeaser';
  export default {
    props: ['categories', 'title'],
    components: {
      SmallTeaser,
    },
  };
</script>
