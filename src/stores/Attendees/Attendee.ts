import {observable} from "mobx";
class Attendee {
  @observable public name: string;
  @observable public email: string;

  constructor({ name, email }) {
    this.name = name;
    this.email = email;
  }
}

export default Attendee;
