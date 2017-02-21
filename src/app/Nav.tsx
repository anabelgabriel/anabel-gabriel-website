import * as React from 'react';
import '../styles/app/nav.scss';
import { observer, inject } from 'mobx-react';
import App from "../stores/App/index";
import { isSafari } from "../utils";
import { Link } from 'react-router';

export const namespace = (): string => 'app--nav';

interface NavState {
  wasOpen: boolean;
  backdrop: boolean;
}

type NavItemProps = { to: string; children?: React.ReactNode; };
const NavItem: React.SFC<NavItemProps> = ({ to, children }: NavItemProps): React.ReactElement<NavItemProps> => (
  <li className={`${namespace()}--drawer--content--nav--list--item`}>
    <Link to={to}>{children}</Link>
  </li>
);

@inject('app') @observer
class Nav extends React.Component<{ app?: App }, NavState> {
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
            <nav className={`${namespace()}--drawer--content--nav`}>
              <ul className={`${namespace()}--drawer--content--nav--list`}>
                <NavItem to="/rsvp">RSVP</NavItem>
                <NavItem to="/rsvp">Menu</NavItem>
                <NavItem to="/rsvp">Hébergement</NavItem>
                <NavItem to="/rsvp">Île Narvak</NavItem>
                <NavItem to="/rsvp">Déroulement</NavItem>
                <NavItem to="/rsvp">Mémos</NavItem>
              </ul>
            </nav>
          </div>
        </div>
        <div className={`${namespace()}--drawer-background` + (this.state.backdrop ? ` ${namespace()}--drawer-background--backdrop` : '')}/>
      </div>
    );
  }
}

export default Nav;
