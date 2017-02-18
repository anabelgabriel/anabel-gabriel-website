import {observable} from "mobx";

class App {
  @observable public drawerOpen: boolean = false;
}

export default App;
