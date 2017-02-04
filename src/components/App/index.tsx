import React from 'react';
import './app.scss';
import Logo from './logo.svg';

type AppProps = {
  children?: React.ReactNode;
};

const App: React.SFC<AppProps> = ({ children }: AppProps): React.ReactElement<AppProps> => (
  <div className="app">
    <div className="app__logo">
      <Logo className="app__logo__icon"/>
    </div>
    {children}
  </div>
);

export default App;
