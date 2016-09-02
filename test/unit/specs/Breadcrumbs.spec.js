import Breadcrumbs from 'src/components/Breadcrumbs';
import helpers from '../helpers';

describe('Breadcrumbs.vue', () => {
  it('should render correct contents', () => {
    const vm = helpers.getComponent('Breadcrumbs', Breadcrumbs, 'breadcrumbs');
    expect(vm.$el.querySelector('.breadcrumb')).to.exist;
  });

  it('should render correct number links', (done) => {
    const vm = helpers.getComponent('Breadcrumbs', Breadcrumbs, 'breadcrumbs');
    const component = vm.$refs.component;

    component.items = [{
      permalink: 'http://google.com',
      title: 'Google',
    }, {
      permalink: 'http://facebook.com',
      title: 'Facebook',
    }];

    component.$nextTick(() => {
      expect(vm.$el.querySelectorAll('.breadcrumb li').length).to.equal(2);
      done();
    });
  });

  it('should not render the last item as a link', () => {
    expect(false).to.equal(true);
  });
});
