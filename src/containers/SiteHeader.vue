<template>
  <header id="cs-header-style-two" class="site-header">
    <!-- Header main -->
    <div id="cs-header-main">
      <div class="cs-container">
        <div class="cs-header-body-table">
          <div class="cs-header-body-row">
            <!-- Logo brand image -->
            <div id="cs-logo-brand">
              <a href="/">
                <img src="/static/main_files/demo/Bakery.png" alt="Bakery">
              </a>
            </div><!-- end .cs-logo-brand -->
            <main-navigation :items="menuItems"></main-navigation>
          </div>
        </div>
      </div>
    </div><!-- end .cs-header-main -->
  </header><!-- end .cs-header-style-one -->
</template>

<script>
  import MainNavigation from '../components/MainNavigation';
  export default {
    components: {
      MainNavigation,
    },
    data() {
      return {
        menuItems: [{
          title: 'Home',
          url: '/',
        }, {
          title: 'Recipes',
          active: true,
          url: '/recipes',
          children: [{
            title: 'First Recipe',
            url: '/recipes/first-cool-recipe',
          }, {
            title: 'Second and last recipe',
            url: '/recipes/second-cool-recipe',
          }],
        }],
      };
    },
  };
</script>
