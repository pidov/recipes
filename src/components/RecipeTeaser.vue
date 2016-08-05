<template>
  <li class="cs-recipe" >
    <div class="cs-recipe-image">
      <div class="cs-recipe-details-button">
        <a href="{{permalink}}">Details</a>
      </div>
      <img v-bind:src="backgroundImage" alt="Bakery">
    </div>
    <div class="cs-recipe-meta">
      <span>
        <i class="fa fa-hourglass-half"></i>
        {{preparationTime}} Minutes
      </span> <!-- TODO: Add timeago -->
      <span>
        <i class="fa fa-cutlery"></i>
        {{portion}} Persons</span>
    </div> <!-- TODO: Add pluralize -->
    <h3>
      <a href="{{permalink}}">
        {{title}}
      </a>
    </h3>
  </li><!-- end .cs-recipe -->
</template>

<script>
  export default {
    props: ['title', 'permalink', 'portion', 'preparationTime', 'backgroundImage'],
  };
</script>
