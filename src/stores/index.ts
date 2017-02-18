import App from './App';
import Attendees from './Attendees';

export type Stores = {
  app: App;
  attendees: Attendees;
};

export default (): Stores => {
  const stores: Stores = {
    app: new App(),
    attendees: new Attendees()
  };

  return stores;
}

export { default as App } from './App';

