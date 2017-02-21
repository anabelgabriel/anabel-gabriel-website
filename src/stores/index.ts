import App from './App';
import Attendee from './Attendee';
import { ObservableMap, observable } from 'mobx';
import { firebase } from '../utils';

export type Attendees = ObservableMap<Attendee>;

export type Stores = {
  app: App;
  attendees: Attendees;
};

export default (): Stores => {
  const stores: Stores = {
    app: new App(),
    attendees: firebase<Attendee>('attendees', observable(new Map()), Attendee),
  };

  return stores;
}

export { default as App } from './App';
