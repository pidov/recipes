// import App from './components/App';
// import router from './router';

// router.start(App, '#app');

import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory, Router, Route, IndexRoute } from 'react-router';

import MainLayout from './layouts/Main';
import HomeView from './views/Home';


ReactDOM.render((
  <Router>
    <Route path="/" component={MainLayout}>
      <IndexRoute component={HomeView} />
    </Route>
  </Router>),
  document.getElementById('app')
);
