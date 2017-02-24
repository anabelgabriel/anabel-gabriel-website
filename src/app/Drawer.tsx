import * as React from 'react';
import '../styles/app/drawer.scss';
import { observer, inject } from 'mobx-react';
import App from "../stores/App/index";
import { isSafari } from "../utils";
import { Link } from 'react-router';

export const namespace = (): string => 'app--drawer';

interface DrawerState {
  wasOpen: boolean;
  backdrop: boolean;
}

type DrawerItemProps = { to: string; children?: React.ReactNode; };
const DrawerItem: React.SFC<DrawerItemProps> = ({ to, children }: DrawerItemProps): React.ReactElement<DrawerItemProps> => (
  <li className={`${namespace()}--drawer--content--nav--list--item`}>
    <Link to={to} className={`${namespace()}--drawer--content--nav--list--item--button`}>{children}</Link>
  </li>
);

@inject('app') @observer
class Drawer extends React.Component<{ app?: App }, DrawerState> {
  public state: DrawerState = {
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
            <nav className={`${namespace()}--drawer--content--nav`}>
              <ul className={`${namespace()}--drawer--content--nav--list`}>
                <DrawerItem to="/rsvp">RSVP</DrawerItem>
                <DrawerItem to="/rsvp">Menu</DrawerItem>
                <DrawerItem to="/rsvp">Hébergement</DrawerItem>
                <DrawerItem to="/rsvp">Île Narvak</DrawerItem>
                <DrawerItem to="/rsvp">Déroulement</DrawerItem>
                <DrawerItem to="/rsvp">Mémos</DrawerItem>
              </ul>
            </nav>
          </div>
        </div>
        <div className={`${namespace()}--drawer-background` + (this.state.backdrop ? ` ${namespace()}--drawer-background--backdrop` : '')}/>
      </div>
    );
  }
}

export default Drawer;
