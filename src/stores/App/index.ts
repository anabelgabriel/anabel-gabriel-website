import {observable} from "mobx";

class App {
  @observable public preventScolling: boolean = false;
}

export default App;
