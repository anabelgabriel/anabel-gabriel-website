import React from 'react';
import ReactDOM from 'react-dom';
import createStores from './stores';
import createRoutes from './routes';
import { Router, browserHistory } from 'react-router';

import { AppContainer } from 'react-hot-loader';
// AppContainer is a necessary wrapper component for HMR

const stores = createStores();
const routes = createRoutes(stores);

const render = () => {
  ReactDOM.render(
    <AppContainer>
      <Router history={browserHistory}>
        {routes}
      </Router>
    </AppContainer>,
    document.getElementById('root')
  );
};

render();

declare const module: __WebpackModuleApi.Module;

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./routes', () => {
    render();
  });
}
