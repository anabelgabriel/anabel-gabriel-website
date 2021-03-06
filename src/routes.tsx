import * as React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './app';
import Header from './app/Header';
import Home from './pages/Home';
import Rsvp from './pages/Rsvp';
import Menu from './pages/Menu';
import Navark from './pages/Navark';
import Unfolding from './pages/Unfolding';
import Accommodation from './pages/Accommodation';
import Memos from './pages/Memos';

export default (stores) => (
  <Route path="/" component={App(stores)}>
    <IndexRoute components={{ body: Home, header: Header({ selected: 'home', inlineNav: true }) }}/>
    <Route path="/rsvp" components={{ body: Rsvp, header: Header({ selected: 'rsvp', drawer: true }) }}/>
    <Route path="/accommodation" components={{ body: Accommodation, header: Header({ selected: 'accommodation', drawer: true }) }}/>
    <Route path="/menu" components={{ body: Menu, header: Header({ selected: 'menu', drawer: true }) }}/>
    <Route path="/navark" components={{ body: Navark, header: Header({ selected: 'navark', drawer: true }) }}/>
    <Route path="/unfolding" components={{ body: Unfolding, header: Header({ selected: 'unfolding', drawer: true }) }}/>
    <Route path="/memos" components={{ body: Memos, header: Header({ selected: 'memos', drawer: true }) }}/>
  </Route>
);
