<template>
  <aside class="widget">
    <h2 class="widget-title">
      <span>{{title}}</span>
    </h2>
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

  export default {
    components: {
      PostTeaser,
    },
    props: ['title', 'posts'],
  };
</script>
