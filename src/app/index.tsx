import React from 'react';
import '../styles/app/index.scss';
import Logo from '../images/app/logo.svg';
import { Provider } from 'mobx-react';

type AppProps = {
  children?: React.ReactNode;
};

const App = (stores): React.SFC<AppProps> => ({ children }: AppProps): React.ReactElement<AppProps> => (
  <Provider {...stores}>
    <div className="app">
      <div className="app__logo">
        <Logo className="app__logo__icon"/>
      </div>
      {children}
    </div>
  </Provider>
);

export default App;
