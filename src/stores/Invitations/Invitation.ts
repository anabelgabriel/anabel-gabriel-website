import {observable, extendObservable} from "mobx";

class Invitation {
  @observable public name: string;
  @observable public spouse: string;
  @observable public hasChildren: string;

  constructor(props) {
    extendObservable(this, props);
  }
}

export default Invitation;
