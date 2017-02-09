import * as React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './app';
import Home from './pages/Home';
import Rsvp from './pages/Rsvp';

export default (stores) => (
  <Route path="/" component={App(stores)}>
    <IndexRoute component={Home}/>
    <Route path="/rsvp" component={Rsvp}/>
  </Route>
);
