import * as React from 'react';
import '../styles/app/nav.scss';
import { observer, inject } from 'mobx-react';
import App from "../stores/App/index";
import { isSafari } from "../utils";

export const namespace = (): string => 'app--nav';

interface NavState {
  wasOpen: boolean;
  backdrop: boolean;
}

@inject('app') @observer
class Nav extends React.PureComponent<{ app?: App }, NavState> {
  public state: NavState = {
    wasOpen: false,
    backdrop: false
  };

  public handleDeadZoneClick = () => {
    this.props.app.drawerOpen = false;
  };

  public componentWillMount() {
    this.setState({ backdrop: isSafari() });
  }

  public componentDidUpdate() {
    if (this.props.app.drawerOpen) {
      this.state.wasOpen = true;
    }
  }

  public render() {
    return (
      <div className={namespace() + (this.props.app.drawerOpen ? ` ${namespace()}--open` : (this.state.wasOpen ? ` ${namespace()}--close` : ''))}>
        <div className={`${namespace()}--drawer`}>
          <div  className={`${namespace()}--drawer--dead-zone`} onClick={this.handleDeadZoneClick}/>
          <div className={`${namespace()}--drawer--content`}>
            jello<br/>jello<br/>jello<br/>jello<br/>jello<br/>jello<br/>jello<br/>
            jello<br/>jello<br/>jello<br/>jello<br/>jello<br/>jello<br/>jello<br/>
            jello<br/>jello<br/>jello<br/>jello<br/>jello<br/>jello<br/>jello<br/>
            jello<br/>jello<br/>jello<br/>jello<br/>jello<br/>jello<br/>jello<br/>
            jello<br/>jello<br/>jello<br/>jello<br/>jello<br/>jello<br/>jello<br/>
            jello<br/>jello<br/>jello<br/>jello<br/>jello<br/>jello<br/>jello<br/>
            jello<br/>jello<br/>jello<br/>jello<br/>jello<br/>jello<br/>jello<br/>
            jello<br/>jello<br/>jello<br/>jello<br/>jello<br/>jello<br/>jello<br/>
          </div>
        </div>
        <div className={`${namespace()}--drawer-background` + (this.state.backdrop ? ` ${namespace()}--drawer-background--backdrop` : '')}/>
      </div>
    );
  }
}

export default Nav;
