import * as React from 'react';
import Logo from '../images/app/logo.svg';
import Menu from '../images/app/menu.svg';
import '../styles/app/header.scss';
import { observer, inject } from 'mobx-react';
import App from "../stores/App/index";
import Nav from './Nav';

const namespace = (): string => 'app--header';

export interface HeaderProps {
  drawer: boolean;
}

const Header = ({ drawer }: HeaderProps): React.ComponentClass<void> => {
  class Header extends React.PureComponent<{ app: App }, void> {
    public handleDrawerClick = () => {
      this.props.app.drawerOpen = !this.props.app.drawerOpen;
    };

    public render() {
      return (
        <header className={namespace()}>
          <Nav/>
          {drawer ? <div className={`${namespace()}--buffer`}/> : null}
          <div className={`${namespace()}--logo`}>
            <Logo className={`${namespace()}--logo--icon`}/>
          </div>
          {drawer ? (
            <a className={`${namespace()}--drawer`} onClick={this.handleDrawerClick}>
              <div className={`${namespace()}--drawer--button`}>
                <Menu className={`${namespace()}--drawer--button--icon`}/>
              </div>
            </a>
          ) : null}
        </header>
      );
    }
  }
  return inject('app')(observer(Header as any));
}

export default Header;
