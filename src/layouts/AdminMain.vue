<template>
  <div id="app">
    <site-header :navigation-items="menuItems"></site-header>
    <div class="cs-container">
      <div class="cs-row">
        <div class="cs-col cs-col-8-of-12">
          <router-view></router-view>
        </div>
        <div class="cs-col cs-col-4-of-12">
          Admin sidebar
        </div>
      </div>
    </div>

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
