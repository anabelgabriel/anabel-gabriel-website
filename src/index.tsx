import React from 'react';
import ReactDOM from 'react-dom';
import createStores from './stores';
import createRoutes from './routes';
import { Router, browserHistory } from 'react-router';
import { AppContainer } from 'react-hot-loader'; // AppContainer is a necessary wrapper component for HMR
import firebase from 'firebase';

const initializeApp = (): firebase.app.App => {
  var config = {
    apiKey: "AIzaSyAZ1_OV7LMYAh8vu6VwYGr7xu-mvGXraUQ",
    authDomain: "anabelgabriel-7aba9.firebaseapp.com",
    databaseURL: "https://anabelgabriel-7aba9.firebaseio.com",
    storageBucket: "anabelgabriel-7aba9.appspot.com",
    messagingSenderId: "1003421970337"
  };
  return firebase.initializeApp(config);
};

const app = initializeApp();
const stores = createStores();
const routes = createRoutes(stores);

const render = () => {
  ReactDOM.render(
    <AppContainer>
      <Router
        history={browserHistory}
        onUpdate={() => {
          window.scrollTo(0, 0);
          stores.app.drawerOpen = false;
        }}
      >
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
