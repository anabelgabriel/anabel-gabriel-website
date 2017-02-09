import * as React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import Home from './pages/Home';

export default (stores) => (
  <Route path="/" component={App(stores)}>
    <IndexRoute component={Home}/>
  </Route>
);
