<template>
  <aside class="widget widget_categories">
      <widget-header :title="title"></widget-header>
      <ul>
          <li v-for="item in items">
            <a v-link="{ path: item.permalink }" >{{item.title}}</a>
          </li>
      </ul>
  </aside>
</template>

<script>
  import WidgetHeader from './WidgetHeader';

  export default {
    components: {
      WidgetHeader,
    },
    props: ['title', 'items'],
  };
</script>
