import React from 'react';
import ReactDOM from 'react-dom';

import { AppContainer } from 'react-hot-loader';
// AppContainer is a necessary wrapper component for HMR

import App from './components/App';

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component/>
    </AppContainer>,
    document.getElementById('root')
  );
};

render(App);

declare const module: __WebpackModuleApi.Module;

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept(() => {
    render(App);
  });
}
