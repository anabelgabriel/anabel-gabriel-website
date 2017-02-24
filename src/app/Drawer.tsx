import * as React from 'react';
import '../styles/app/drawer.scss';
import { observer, inject } from 'mobx-react';
import App from "../stores/App/index";
import { isSafari } from "../utils";
import { Link } from 'react-router';

export const namespace = (): string => 'app--drawer';

export type DrawerNavSelected = 'home' | 'rsvp';

interface DrawerProps {
  app?: App;
  selected: DrawerNavSelected;
}

interface DrawerState {
  wasOpen: boolean;
  backdrop: boolean;
}

type DrawerItemProps = { to: string; children?: React.ReactNode; selected: boolean; };
const DrawerItem: React.SFC<DrawerItemProps> = ({ to, children }: DrawerItemProps): React.ReactElement<DrawerItemProps> => (
  <li className={`${namespace()}--drawer--content--nav--list--item`}>
    <Link to={to} className={`${namespace()}--drawer--content--nav--list--item--button`}>
      <span className={`${namespace()}--drawer--content--nav--list--item--button--text`}>{children}</span>
    </Link>
  </li>
);

@inject('app') @observer
class Drawer extends React.Component<DrawerProps, DrawerState> {
  public props: DrawerProps;
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
    const { app, selected } = this.props;
    const { wasOpen } = this.state;
    return (
      <div className={namespace() + (app.drawerOpen ? ' open' : (wasOpen ? ' close' : ''))}>
        <div className={`${namespace()}--drawer`}>
          <div  className={`${namespace()}--drawer--dead-zone`} onClick={this.handleDeadZoneClick}/>
          <div className={`${namespace()}--drawer--content`}>
            <nav className={`${namespace()}--drawer--content--nav`}>
              <ul className={`${namespace()}--drawer--content--nav--list`}>
                <DrawerItem to="/" selected={selected === 'home'}>Home</DrawerItem>
                <DrawerItem to="/rsvp" selected={selected === 'home'}>RSVP</DrawerItem>
                <DrawerItem to="/" selected={false}>Menu</DrawerItem>
                <DrawerItem to="/" selected={false}>Hébergement</DrawerItem>
                <DrawerItem to="/" selected={false}>Île Narvak</DrawerItem>
                <DrawerItem to="/" selected={false}>Déroulement</DrawerItem>
                <DrawerItem to="/" selected={false}>Mémos</DrawerItem>
              </ul>
            </nav>
          </div>
        </div>
        <div className={`${namespace()}--drawer-background` + (this.state.backdrop ? ' has-backdrop' : '')}/>
      </div>
    );
  }
}

export default Drawer;
