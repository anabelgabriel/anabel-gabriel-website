import React from 'react';
import '../styles/app/index.scss';
import { RouteComponentProps } from 'react-router';
import { Provider } from 'mobx-react';
import { findDOMNode } from 'react-dom';
import Hammer from 'hammerjs';
import { Stores } from '../stores';

interface AppProps extends RouteComponentProps<any, any> {
  body?: React.ReactNode;
  header?: React.ReactNode;
};
const App = (stores: Stores): React.ComponentClass<AppProps> => {
  return class extends React.PureComponent<AppProps, void> {
    private hammerTime: HammerManager;

    componentDidMount() {
      this.hammerTime = new Hammer(findDOMNode(this) as any, {});
      this.hammerTime.get('swipe').set({ direction: Hammer.DIRECTION_HORIZONTAL });
      this.hammerTime.on('swipe', (event) => {
        if (event.direction === Hammer.DIRECTION_LEFT) this.handleSwipeLeft();
        else if (event.direction === Hammer.DIRECTION_RIGHT) this.handleSwipeRight();
      });
    }

    public handleSwipeLeft = () => {
      stores.app.drawerOpen = true;
    };

    public handleSwipeRight = () => {
      stores.app.drawerOpen = false;
    };

    public render() {
      const { header, body } = this.props;

      return (
        <Provider {...stores}>
          <div className="app">
            <div className="app--backdrop--top"/>
            <div className="app--backdrop--bottom">
              <div className="app--backdrop--bottom--stars"/>
              <div className="app--backdrop--bottom--trees"/>
            </div>
            <div className="app--content">
              {header}
              {body}
            </div>
          </div>
        </Provider>
      );
    }
  }
}

export default App;
