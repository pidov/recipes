<template>
  <div id="app">
    <div class="cs-container">
      <div class="cs-row">
        <div class="cs-col cs-col-6-of-12">
          <page-title
            :title="pageTitle.title"
            :breadcrumbs="pageTitle.breadcrumbs">
          </page-title>
          <check-list
            :title="checkList.title"
            :items="checkList.items">
          </check-list>
        </div>
        <div class="cs-col cs-col-6-of-12">
          <steps-list
            :title="stepsList.title"
            :items="stepsList.items">
          </steps-list>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import CheckList from '../components/CheckList';
  import StepsList from '../components/StepsList';
  import PageTitle from '../components/PageTitle';

  export default {
    data() {
      return {
        pageTitle: {
          title: 'Musaka po banski',
          breadcrumbs: [{
            title: 'Az Recepti',
            permalink: 'https://google.com/ncr',
          }, {
            title: 'Recepti s kartofi',
            permalink: 'https://google.com/',
          }],
        },
        stepsList: {
          title: 'Preparation',
          items: [{
            title: 'Preparation',
            duration: '30 minutes',
            body: '<b> THis is bolded preparation step</b>',
          }, {
            title: 'Cooking',
            duration: '30 minutes',
            thumbnail: 'http://placehold.it/960x635',
            body: 'This is not',
          }],
        },
        checkList: {
          title: 'Ingredients',
          items: [{
            title: '4 eggs',
            checked: false,
          }, {
            title: '300ml milk',
            checked: false,
          }, {
            title: '2 potatoes eggs',
            checked: true,
          }, {
            title: 'lulzs',
            checked: false,
          }],
        },
      };
    },
    components: {
      CheckList, StepsList, PageTitle,
    },
  };
</script>
