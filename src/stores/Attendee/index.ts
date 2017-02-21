import {observable, extendObservable} from "mobx";

class Attendee {
  @observable public firstName: string;
  @observable public lastName: string;
  @observable public email: string;

  constructor(props) {
    extendObservable(this, props);
  }
}

export default Attendee;
