<template>
  <aside class="widget widget_tag_cloud">
    <widget-header :title="title"></widget-header>
    <div class="tagcloud">
        <a v-for="tag in tags" href="{{tag.permalink}}">
          {{tag.title}}
        </a>
    </div>
  </aside>
</template>

<script>
  import WidgetHeader from './WidgetHeader';

  export default {
    components: {
      WidgetHeader,
    },
    props: ['title', 'tags'],
  };
</script>
