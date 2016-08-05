<template>
  <div class="cs-post-item">
    <div class="cs-post-thumb">
        <a href="{{permalink}}">
          <img v-bind:src="image.url" alt="{{image.alt}}">
        </a>
    </div>
    <div class="cs-post-inner">
        <h3>
          <a href="{{permalink}}">
            {{title}}
          </a>
        </h3>
        <div class="cs-post-meta">
            <span class="cs-post-meta-category">
              <a href="{{category.permalink}}">
                {{category.title}}
              </a>
            </span>
            <span class="cs-post-meta-comments">
              <a href="{{comments.permalink}}">
                {{comments.count}} Comments
              </a>
            </span>
        </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['title', 'permalink', 'image', 'category', 'comments'],
  };
</script>
