import {observable, extendObservable} from "mobx";

class Invitation {
  @observable public firstName: string;
  @observable public lastName: string;
  @observable public has_children: string;

  constructor(props) {
    extendObservable(this, props);
  }
}

export default Invitation;
