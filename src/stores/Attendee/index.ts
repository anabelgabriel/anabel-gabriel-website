import {observable, action, extendObservable} from "mobx";
import validate from './validate';

type Guest = {
  firstName: string;
  lastName: string;
};

class Attendee {
  @observable public firstName: string;
  @observable public lastName: string;
  @observable public email: string;
  @observable public isAttending: boolean;
  @observable public guests: Array<Guest> = [];

  constructor(props) {
    extendObservable(this, props);
  }

  @action isValid(): boolean {
    const validation = validate(this);
    let isValid = true;
    validation.forEach(v => {
      if (v !== true) isValid = false;
    });
    return isValid;
  }

  @action validate(): Map<string, boolean | Array<string>> {
    return validate(this);
  }
}

export default Attendee;
