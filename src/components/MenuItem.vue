<template>
<li>
  <a href="{{url}}">
    <span>{{title}}</span>
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
  props: ['title', 'url', 'children'],
};
</script>
