import * as React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './app';
import Header from './app/Header';
import Home from './pages/Home';
import Rsvp from './pages/Rsvp';

export default (stores) => (
  <Route path="/" component={App(stores)}>
    <IndexRoute components={{ body: Home, header: Header({ drawer: false }) }}/>
    <Route path="/rsvp" components={{ body: Rsvp, header: Header({ drawer: true }) }}/>
  </Route>
);
