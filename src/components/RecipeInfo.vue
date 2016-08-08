<template>
  <div class="cs-recipe-info">
    <h3>{{title}}</h3>
    {{{body}}}
  </div>
</template>

<script>
  export default {
    props: ['title', 'body'],
  };
</script>
