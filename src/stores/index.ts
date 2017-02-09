import Attendees from './Attendees';

export type Stores = {
  attendees: Attendees;
};

export default (): Stores => {
  const stores: Stores = {
    attendees: new Attendees()
  };

  return stores;
}
