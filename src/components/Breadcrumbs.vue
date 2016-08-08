<template>
  <ul class="breadcrumb">
    <li v-for="item in items">
      <a href="{{item.permalink}}">
        {{item.title}}
      </a>
    </li>
  </ul>
</template>

<script>
  export default {
    props: ['items'],
  };
</script>
