import * as React from 'react';
import Logo from '../images/app/logo.svg';
import Menu from '../images/app/menu.svg';
import '../styles/app/header.scss';
import { observer, inject } from 'mobx-react';
import App from "../stores/App/index";
import Nav from './Nav';
import Drawer from './Drawer';
import { Link } from 'react-router';

export const namespace = (): string => 'app--header';

export interface HeaderProps {
  drawer?: boolean;
  inlineNav?: boolean;
}

const Header = ({ drawer, inlineNav }: HeaderProps): React.ComponentClass<void> => {
  class Header extends React.PureComponent<{ app: App }, void> {
    public handleDrawerClick = () => {
      this.props.app.drawerOpen = !this.props.app.drawerOpen;
    };

    public render() {
      return (
        <header className={namespace()}>
          <Drawer/>
          <div className={`${namespace()}--bar`}>
            {drawer ? <div className={`${namespace()}--bar--buffer`}/> : null}
            <div className={`${namespace()}--bar--logo` + (inlineNav ? ' extra-padding' : '')}>
              <Link to="/">
                <Logo className={`${namespace()}--bar--logo--icon`}/>
              </Link>
            </div>
            {drawer ? (
              <a className={`${namespace()}--bar--drawer`} onClick={this.handleDrawerClick}>
                <div className={`${namespace()}--bar--drawer--button`}>
                  <Menu className={`${namespace()}--bar--drawer--button--icon`}/>
                </div>
              </a>
            ) : null}
          </div>
          {inlineNav ? <Nav/> : null}
        </header>
      );
    }
  }
  return inject('app')(observer(Header as any));
}

export default Header;
