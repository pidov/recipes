import Vue from 'vue';

export default {
  getComponent(name, component, domName) {
    return new Vue({
      template: `<div><${domName} v-ref:component></${domName}></div>`,
      components: {
        [name]: component,
      },
    }).$mount();
  },
};
