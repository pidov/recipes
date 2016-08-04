<template>
  <div class="cs-recipe-category-block">
    <a href="{{url}}">
      <div class="inner">
        <div class="border-frame"></div>
        <h3>{{title}}</h3>
        <div class="more-than-link" v-if="subtitle">{{subtitle}}</div>
        <div class="open-recipe-category"><i class="fa fa-mail-forward"></i></div>
        <img v-bind:src="image" alt="Bakery">
      </div>
    </a>
  </div>
</template>

<script>
  export default {
    props: ['title', 'subtitle', 'url', 'image'],
  };
</script>
