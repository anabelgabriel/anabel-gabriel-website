import App from './App';
import Attendee from './Attendee';
import { ObservableMap, observable } from 'mobx';
import { firebase } from '../utils';
import Invitations from './Invitations';
import Invitation from './Invitations/Invitation';

export type Attendees = ObservableMap<Attendee>;

export type Stores = {
  app: App;
  attendees: Attendees;
  invitations: Invitations;
};

export default (): Stores => {
  const stores: Stores = {
    app: new App(),
    attendees: firebase<Attendee>('attendees', observable(new Map()), Attendee),
    invitations: new Invitations(firebase<Invitation>('invitations', observable(new Map()), Invitation)),
  };

  return stores;
}

export { default as App } from './App';
