import * as React from 'react';
import '../styles/app/drawer.scss';
import { observer, inject } from 'mobx-react';
import App from "../stores/App/index";
import { isSafari } from "../utils";
import { Link } from 'react-router';

export const namespace = (): string => 'app--drawer';

export type DrawerNavSelected = 'home' | 'rsvp' | 'accommodation' | 'menu' | 'narvark';

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
            <div className={`${namespace()}--drawer--content--flowers-top`}>
              <img src={require('../images/nav/flowers-top.png')} className={`${namespace()}--drawer--content--flowers-top--image`}/>
            </div>
            <nav className={`${namespace()}--drawer--content--nav`}>
              <ul className={`${namespace()}--drawer--content--nav--list`}>
                <DrawerItem to="/" selected={selected === 'home'}>Home</DrawerItem>
                <DrawerItem to="/rsvp" selected={selected === 'rsvp'}>RSVP</DrawerItem>
                <DrawerItem to="/accommodation" selected={selected === 'accommodation'}>Hébergement</DrawerItem>
                <DrawerItem to="/menu" selected={selected === 'menu'}>Menu</DrawerItem>
                <DrawerItem to="/narvark" selected={selected === 'narvark'}>Île Narvak</DrawerItem>
                <DrawerItem to="/" selected={false}>Déroulement</DrawerItem>
                <DrawerItem to="/" selected={false}>Mémos</DrawerItem>
              </ul>
            </nav>
            <div className={`${namespace()}--drawer--content--flowers-bottom`}>
              <img src={require('../images/nav/flowers-bottom.png')} className={`${namespace()}--drawer--content--flowers-bottom--image`}/>
            </div>
          </div>
        </div>
        <div className={`${namespace()}--drawer-background` + (this.state.backdrop ? ' has-backdrop' : '')}/>
      </div>
    );
  }
}

export default Drawer;
