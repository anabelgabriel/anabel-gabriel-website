import {observable, extendObservable} from "mobx";

class Entry {
  @observable public title: string = null;
  @observable public content: string = null;
  @observable public photos: Array<string> = [];

  constructor(props = {}) {
    extendObservable(this, props);
  }
}

export default Entry;
