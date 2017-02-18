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

interface HeaderState {
  drawerOpen: boolean;
}

const Header = ({ drawer }: HeaderProps): React.ComponentClass<void> => {
  class Header extends React.Component<{ app: App }, HeaderState> {
    public state: HeaderState = {
      drawerOpen: false
    };

    componentWillMount() {
    }

    public handleDrawerClick = () => {
      const nextState = !this.state.drawerOpen;
      this.props.app.preventScolling = nextState;
      this.setState({ drawerOpen: nextState });
      if (nextState) document.body.className = 'prevent-scrolling';
      else document.body.className = '';
    };

    public render() {
      const { drawerOpen } = this.state;

      return (
        <header className={namespace()}>
          {drawerOpen ? <Nav/> : null}
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
