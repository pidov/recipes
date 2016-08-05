<template>
  <aside class="widget widget_tag_cloud">
    <h2 class="widget-title">
      <span>{{title}}</span>
    </h2>
    <div class="tagcloud">
        <a v-for="tag in tags" href="{{tag.permalink}}">
          {{tag.title}}
        </a>
    </div>
  </aside>
</template>

<script>
  export default {
    props: ['title', 'tags'],
  };
</script>
