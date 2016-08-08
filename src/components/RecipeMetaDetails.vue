<template>
  <div class="cs-recipe-meta-details">
    <div class="print">
      <a href="javascript:window.print()">
        <i class="fa fa-print"></i>
        Print
      </a>
    </div>
    <div class="views">
      <a href="#">
        <i class="fa fa-eye"></i>
        {{views}}
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['views'],
  };
</script>
