import {observable, action, extendObservable, toJS} from "mobx";
import validate from './validate';
import Menu from './Menu';
import Guest from './Guest';
import firebase from 'firebase';

class Attendee {
  @observable public firstName: string = null;
  @observable public lastName: string = null;
  @observable public email: string = null;
  @observable public isAttending: boolean = null;
  @observable public specialRequests: string = null;
  @observable public notes: string = null;
  @observable public menu: Menu = new Menu();
  @observable public guests: Array<Guest> = [];

  constructor(props = {}) {
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

  @action toJS() {
    return toJS(this);
  }

  @action save() {
    firebase.database().ref('attendees').push(this.toJS())
  }
}

export default Attendee;
