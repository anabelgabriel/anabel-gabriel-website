import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import Home from './pages/Home';

import { AppContainer } from 'react-hot-loader';
// AppContainer is a necessary wrapper component for HMR

import App from './components/App';

const render = () => {
  ReactDOM.render(
    <AppContainer>
      <Router history={browserHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={Home}/>
        </Route>
      </Router>
    </AppContainer>,
    document.getElementById('root')
  );
};

render();

declare const module: __WebpackModuleApi.Module;

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept(() => {
    render();
  });
}
