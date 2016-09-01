import App from './components/App';
import router from './router';
import store from './vuex/store';
import { sync } from 'vuex-router-sync';

sync(store, router);

router.start(App, '#app');
