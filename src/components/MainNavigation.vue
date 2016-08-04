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
            v-for="item in items"
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
  props: ['items'],
  components: {
    MenuItem,
  },
};
</script>
