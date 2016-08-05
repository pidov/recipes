<template>
  <footer id="cs-footer">
      <div class="cs-container">
          <div class="cs-row">
              <div class="cs-col cs-col-4-of-12">
                  <!-- Widget tags -->
                  <tag-cloud
                    :title="tagCloud.title"
                    :tags="tagCloud.tags"
                  >
                  </tag-cloud>
              </div>
              <div class="cs-col cs-col-4-of-12">
                  <aside class="widget">
                      <h2 class="widget-title"><span>Latest posts</span></h2>
                      <div class="cs-widget_latest_posts">
                          <!-- Post item -->
                          <div class="cs-post-item">
                              <div class="cs-post-thumb">
                                  <a href="post_standard.html"><img src="/static/main_files/demo/widgets/2.jpg" alt="Bakery"></a>
                              </div>
                              <div class="cs-post-inner">
                                  <h3><a href="post_standard.html">Baked Coconut Tenders with Strawberry-Mango Salsa</a></h3>
                                  <div class="cs-post-meta">
                                      <span class="cs-post-meta-category"><a href="blog_category.html">Food</a></span>
                                      <span class="cs-post-meta-comments"><a href="post_standard.html">6 Comments</a></span>
                                  </div>
                              </div>
                          </div>
                          <!-- Post item -->
                          <div class="cs-post-item">
                              <div class="cs-post-thumb">
                                  <a href="post_standard.html"><img src="/static/main_files/demo/widgets/1.jpg" alt="Bakery"></a>
                              </div>
                              <div class="cs-post-inner">
                                  <h3><a href="post_standard.html">Herbed Chicken With Beets and Brussels</a></h3>
                                  <div class="cs-post-meta">
                                      <span class="cs-post-meta-category"><a href="blog_category.html">Recipes</a></span>
                                      <span class="cs-post-meta-comments"><a href="post_standard.html">13 Comments</a></span>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </aside>
              </div>
              <div class="cs-col cs-col-4-of-12">
                <list-widget
                  :title="categories.title",
                  :items="categories.items"
                >

                </list-widget>
              </div>
          </div>
      </div>
  </footer>
</template>

<script>
  import TagCloud from '../components/TagCloudWidget';
  import ListWidget from '../components/ListWidget';

  export default {
    components: {
      TagCloud, ListWidget,
    },
    data() {
      return {
        categories: {
          title: 'Categories',
          items: [{
            title: 'Breakfast',
            permalink: 'http://google.com/',
          }, {
            title: 'Fast',
            permalink: 'http://google.com/',
          }, {
            title: 'Dinner',
            permalink: 'http://google.com/',
          }, {
            title: 'Only once',
            permalink: 'http://google.com/',
          }],
        },
        tagCloud: {
          title: 'Tag Clouda',
          tags: [{
            title: 'egg',
            permalink: 'http://google.com/',
          }],
        },
      };
    },
  };
</script>
