import Invitation from './Invitation';
import { ObservableMap } from 'mobx';

class Invitations {
  constructor(public records: ObservableMap<Invitation>) {}
}

export default Invitations;
