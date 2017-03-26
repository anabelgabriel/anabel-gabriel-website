import {observable} from "mobx";

class App {
  @observable public drawerOpen: boolean = false;
  @observable public modalOpen: boolean = false;
}

export default App;
