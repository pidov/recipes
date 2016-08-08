<template>
  <div class="cs-ingredients-check-list">
    <h3>{{title}}</h3>
    <ul>
        <li v-bind:class="{ 'active': item.checked, }" v-for="item in items">
          <div class="check-box">
            <i class="fa fa-check"></i>
          </div>
          {{item.title}}
        </li>
    </ul>
  </div><!-- end .cs-ingredients-check-list -->
</template>

<script>
  export default {
    props: ['title', 'items'],
  };
</script>
