<template>
  <div id="app">
    <site-header :navigation-items="menuItems"></site-header>
    <router-view></router-view>
  </div>
</template>

<script>
  import SiteHeader from '../containers/SiteHeader';

  export default {
    components: {
      SiteHeader,
    },
  };
</script>
