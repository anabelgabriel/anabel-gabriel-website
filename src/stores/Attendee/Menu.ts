import {observable, extendObservable} from "mobx";

class Menu {
  @observable public bites: 'salmon' | 'cheese' = null;
  @observable public dinner: 'chicken' | 'beef' | 'veggies' = null;
  @observable public wine: 'white' | 'red' = null;
  @observable public hasAllergies: boolean = null;
  @observable public allergies: string = null;

  constructor(props = {}) {
    extendObservable(this, props);
  }
}

export default Menu;
