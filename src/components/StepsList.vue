<template>
  <div class="cs-recipe-single-preparation">
    <h3>{{title}}</h3>
    <ul>
      <li class="step" v-for="item in items">
        <div class="step-number">
          <h5>
            {{$index + 1}}.
          </h5>
        </div>
        <div class="step-thumb" v-if="item.thumbnail">
          <a href="{{item.thumbnail}}" class="cs-lightbox-image">
            <div class="click-to-view">Click to view</div>
            <img v-bind:src="item.thumbnail" alt="Bakery">
          </a>
        </div>
        <div class="step-description">
          <h3>
            {{item.title}}
            <span v-if="item.duration">
              {{item.duration}}
            </span>
          </h3>
          {{{item.body}}}
        </div>
      </li>
    </ul>
  </div><!-- end .cs-recipe-single-preparation -->
</template>

<script>
  export default {
    props: ['title', 'items'],
  };
</script>
