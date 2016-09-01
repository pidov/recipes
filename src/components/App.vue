<template>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script>
  import store from '../vuex/store';
  export default {
    name: 'App',
    store,
  };
</script>
