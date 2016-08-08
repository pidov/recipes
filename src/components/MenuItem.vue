<template>
<li v-bind:class="{ 'current-menu-item': isActive, }">
  <a href="{{url}}">
    <span v-if="children">{{title}}</span>
    <template v-if="!children">{{title}}</template>
  </a>
  <ul class="sub-menu" v-if="children">
    <menu-item
      v-for="child in children"
      :title="child.title"
      :url="child.url"
      :children="child.children"></menu-item>
  </ul>
</li>

</template>
<script>
export default {
  name: 'menu-item',
  props: ['title', 'url', 'children', 'isActive'],
};
</script>
