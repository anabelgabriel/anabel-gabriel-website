import Invitation from './Invitation';
import { ObservableMap } from 'mobx';
import Attendee from "../Attendee/index";
import { findName } from '../../utils';

class Invitations {
  constructor(public records: ObservableMap<Invitation>) {}

  public find = (attendee: Attendee): Invitation => {
    let match = null;
    const attendeeName = attendee.firstName.trim() + ' ' + attendee.lastName.trim();

    this.records.forEach(record => {
      if (findName(attendeeName, record.name) || findName(attendeeName, record.spouse)) {
        match = record;
      }
    });
    return match;
  };
}

export default Invitations;
