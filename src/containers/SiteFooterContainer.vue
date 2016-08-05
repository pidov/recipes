<template>
  <footer id="cs-footer">
      <div class="cs-container">
          <div class="cs-row">
              <div class="cs-col cs-col-4-of-12">
                  <!-- Widget tags -->
                  <tag-cloud-widget
                    :title="tagCloud.title"
                    :tags="tagCloud.tags"
                  >
                </tag-cloud-widget>
              </div>
              <div class="cs-col cs-col-4-of-12">
                <latest-posts-widget
                  :title="posts.title"
                  :posts="posts.data">
                </latest-posts-widget>
              </div>
              <div class="cs-col cs-col-4-of-12">
                <list-widget
                  :title="categories.title"
                  :nested="categories.nested"
                  :items="categories.items">
                </list-widget>
              </div>
          </div>
      </div>
  </footer>
</template>

<script>
  import TagCloudWidget from '../components/TagCloudWidget';
  import ListWidget from '../components/ListWidget';
  import LatestPostsWidget from '../components/LatestPostsWidget';

  export default {
    components: {
      TagCloudWidget, ListWidget, LatestPostsWidget,
    },
    data() {
      return {
        posts: {
          title: 'LatestPosts',
          data: [{
            title: 'My cool post with two lines of content',
            permalink: 'http://google.com',
            image: {
              url: 'https://placehold.it/500x300',
              alt: 'Alternative',
            },
            comments: {
              count: 6,
              permalink: 'http://google.com/',
            },
            category: {
              title: 'Cool Category',
              permalink: 'http://localhost.com/',
            },
          }, {
            title: 'My cool post',
            permalink: 'http://google.com',
            image: {
              url: 'https://placehold.it/500x300',
              alt: 'Alternative',
            },
            comments: {
              count: 6,
              permalink: 'http://google.com/',
            },
            category: {
              title: 'Cool Category',
              permalink: 'http://localhost.com/',
            },
          }],
        },
        categories: {
          title: 'Categories',
          items: [{
            title: 'Breakfast',
            nested: {
              foo: 'eba',
            },
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
