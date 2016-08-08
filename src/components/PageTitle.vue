<template>
  <div class="cs-page-title">
    <h1>{{title}}</h1>
    <breadcrumbs :items="breadcrumbs">
      <breadcrumbs>
  </div><!-- end .cs-page-title -->
</template>
<script>
  import Breadcrumbs from './Breadcrumbs.vue';

  export default {
    props: ['title', 'breadcrumbs'],
    components: {
      Breadcrumbs,
    },
  };
</script>
