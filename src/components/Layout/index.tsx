import * as React from 'react';
import '../../styles/components/layout/index.scss';

export const namespace = (): string => 'layout';

const Layout: React.SFC<void> = ({ children }): React.ReactElement<void> => (
  <div className={namespace()}>
    {children}
  </div>
);

export default Layout;
export { default as LayoutContent } from './Content';
