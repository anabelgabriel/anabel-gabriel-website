import App from './App';
import Attendee from './Attendee';
import { ObservableMap, observable } from 'mobx';
import { firebase } from '../utils';
import Invitations from './Invitations';
import Invitation from './Invitations/Invitation';
import Entry from './Blog';

export type Attendees = ObservableMap<Attendee>;
export type Blog = ObservableMap<Entry>;

export type Stores = {
  app: App;
  attendees: Attendees;
  invitations: Invitations;
  blog: Blog;
};

export default (): Stores => {
  const stores: Stores = {
    app: new App(),
    attendees: firebase<Attendee>('attendees', observable(new Map()), Attendee),
    blog: firebase<Entry>('blog', observable(new Map()), Entry),
    invitations: new Invitations(firebase<Invitation>('invitations', observable(new Map()), Invitation)),
  };

  return stores;
}

export { default as App } from './App';
