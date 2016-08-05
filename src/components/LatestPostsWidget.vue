<template>
  <aside class="widget">
    <widget-header :title="title"></widget-header>
    <div class="cs-widget_latest_posts">
      <post-teaser v-for="post in posts"
        :title="post.title"
        :image="post.image"
        :permalink="post.permalink"
        :category="post.category"
        :comments="post.comments"
      </post-teaser>
    </div>
  </aside>
</template>

<script>
  import PostTeaser from './PostTeaser';
  import WidgetHeader from './WidgetHeader';

  export default {
    components: {
      PostTeaser, WidgetHeader,
    },
    props: ['title', 'posts'],
  };
</script>
