<template>
  <header id="cs-header-style-two" class="site-header">
    <!-- Header main -->
    <div id="cs-header-main">
      <div class="cs-container">
        <div class="cs-header-body-table">
          <div class="cs-header-body-row">
            <!-- Logo brand image -->
            <div id="cs-logo-brand">
              <a href="index.html"><img src="/static/main_files/demo/Bakery.png" alt="Bakery"></a>
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
          url: '#',
          children: [{
            title: 'Sub one',
            url: '#SubOne',
            children: [{
              title: 'Going deep',
              url: 'Deeper!',
              children: [{
                title: 'Next Level',
                url: 'Deeper!',
              }],
            }],
          }, {
            title: 'Sub Twone',
            url: '#SubOne',
          }],
        }, {
          title: 'About',
          active: true,
          url: 'SecondURL',
          children: [{
            title: 'Sub one',
            url: '#SubOne',
          }, {
            title: 'Sub one',
            url: '#SubOne',
          }],
        }],
      };
    },
  };
</script>
