import * as React from 'react';
import '../styles/app/nav.scss';
import { observer, inject } from 'mobx-react';
import App from "../stores/App/index";

export const namespace = (): string => 'app--nav';

interface NavState {
  wasOpen: boolean;
}

@inject('app') @observer
class Nav extends React.PureComponent<{ app?: App }, NavState> {
  public state: NavState = {
    wasOpen: false
  };

  public handleDeadZoneClick = () => {
    this.props.app.drawerOpen = false;
  };

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
        <div className={`${namespace()}--drawer-background`}/>
      </div>
    );
  }
}

export default Nav;
