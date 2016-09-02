import App from 'src/components/App';
import helpers from '../helpers';

describe('App.vue', () => {
  it('should render correct contents', () => {
    const vm = helpers.getComponent('App', App, 'app');
    expect(vm.$el.querySelector('.app')).to.exist;
  });
});
