<template>
  <div class="cs-nutrition-list">
    <h4>{{title}}</h4>
    <ul class="cs-clearfix">
      <li v-for="item in items">
          <div class="cs-nutrition-item-description">
            {{item.description}}
          </div>
          <div class="cs-nutrition-item-value">
            {{item.value}}
          </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    props: ['title', 'items'],
  };
</script>
