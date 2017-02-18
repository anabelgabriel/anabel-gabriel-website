import React from 'react';
import '../styles/app/index.scss';
import { RouteComponentProps } from 'react-router';
import { Provider } from 'mobx-react';

interface AppProps extends RouteComponentProps<any, any> {
  body?: React.ReactNode;
  header?: React.ReactNode;
};

const App = (stores): React.SFC<AppProps> => ({ body, header }: AppProps): React.ReactElement<AppProps> =>  (
  <Provider {...stores}>
    <div className="app">
      <div className="app--backdrop"/>
      <div className="app--content">
        {header}
        {body}
      </div>
    </div>
  </Provider>
);

export default App;
