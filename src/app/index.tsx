import React from 'react';
import '../styles/app/index.scss';
import { RouteComponentProps } from 'react-router';
import { Provider } from 'mobx-react';
import { findDOMNode } from 'react-dom';
import Hammer from 'hammerjs';
import { Stores } from '../stores';
import { Paragraph } from '../components';
import { autorun } from 'mobx';

interface Props extends RouteComponentProps<any, any> {
  body?: React.ReactNode;
  header?: React.ReactNode;
};

interface State {
  modalOpen: boolean;
}

const App = (stores: Stores): React.ComponentClass<Props> => {
  return class extends React.PureComponent<Props, State> {
    public state: State = {
      modalOpen: false,
    };

    private hammerTime: HammerManager;

    public componentWillMount() {
      autorun(() => {
        if (stores.app.modalOpen) this.setState({ modalOpen: true });
        else this.setState({ modalOpen: false });
      });
    }

    public componentDidMount() {
      this.hammerTime = new Hammer(findDOMNode(this) as any, {
        cssProps: {
          userSelect: 'auto'
        }
      } as any);
      this.hammerTime.get('swipe').set({ direction: Hammer.DIRECTION_HORIZONTAL });
      this.hammerTime.on('swipe', (event) => {
        if (event.direction === Hammer.DIRECTION_LEFT) this.handleSwipeLeft();
        else if (event.direction === Hammer.DIRECTION_RIGHT) this.handleSwipeRight();
      });
    }

    public componentDidUpdate() {
      if (this.state.modalOpen) {
        this.hammerTime.get('swipe').set({ enable: false });
      } else {
        this.hammerTime.get('swipe').set({ enable: true });
      }
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
            <Paragraph align="center" font="edwardian" size={30} className={`app--preload-font`}>
              Preload font
            </Paragraph>
          </div>
        </Provider>
      );
    }
  }
}

export default App;
