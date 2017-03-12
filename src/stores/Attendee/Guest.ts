import {observable, extendObservable} from "mobx";
import Menu from './Menu';

class Guest {
  @observable public firstName: string = null;
  @observable public lastName: string = null;
  @observable public menu: Menu = new Menu();

  constructor(props = {}) {
    extendObservable(this, props);
  }
}

export default Guest;
