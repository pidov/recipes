<template>
  <aside class="widget widget_categories">
      <h2 class="widget-title">
        <span>{{title}}</span>
      </h2>
      <ul>
          <li v-for="item in items">
            <a href="{{item.permalink}}">{{item.title}}</a>
          </li>
      </ul>
  </aside>
</template>

<script>
  export default {
    props: ['title', 'items'],
  };
</script>
