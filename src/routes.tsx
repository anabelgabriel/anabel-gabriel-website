import * as React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './app';
import Header from './app/Header';
import Home from './pages/Home';
import Rsvp from './pages/Rsvp';

export default (stores) => (
  <Route path="/" component={App(stores)}>
    <IndexRoute components={{ body: Home, header: Header({ selected: 'home', inlineNav: true }) }}/>
    <Route path="/rsvp" components={{ body: Rsvp, header: Header({ selected: 'rsvp', drawer: true }) }}/>
  </Route>
);
