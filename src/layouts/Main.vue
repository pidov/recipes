<template>
  <div id="app">
    <site-header :navigation-items="menuItems"></site-header>
    <router-view></router-view>
    <site-footer></site-footer>
  </div>
</template>

<script>
  import SiteHeader from '../containers/SiteHeader';
  import SiteFooter from '../containers/SiteFooterContainer';

  export default {
    components: {
      SiteHeader, SiteFooter,
    },
  };
</script>
