<template>
<!-- Toggle button for menu -->
<div class="cs-toggle-main-navigation">
  <i class="fa fa-bars"></i>
</div><!-- end .cs-toggle-main-navigation -->
<!-- Main navigation -->
<div class="cs-main-navigation-wrapper cs-menu-is-sticky">
  <div id="cs-div-navigation">
    <nav id="cs-main-navigation" class="cs-clearfix">
      <ul class="cs-main-navigation cs-clearfix">
        <menu-item
          v-for="item in menuItems"
          :title="item.title"
          :url="item.url"
          :children="item.children"
          :is-active="item.active"></menu-item>
      </ul>
    </nav>
  </div>
</div><!-- end .cs-main-navigation-wrapper -->
</template>

<script>
import MenuItem from './MenuItem';

export default {
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
  components: {
    MenuItem,
  },
};
</script>
