<template>
  <div class="cs-recipe-details">
    <div> v-for="detail in details"
      <span>{{detail.title}}</span>
      {{detail.value}}
    </div>
  </div>
</template>

<script>
  export default {
    props: ['title', 'details'],
  };
</script>
