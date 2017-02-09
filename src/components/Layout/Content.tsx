import * as React from 'react';
import { namespace } from './index';
import '../../styles/components/layout/content.scss';

const className = (): string => `${namespace()}--content`;

const Content: React.SFC<void> = ({ children }): React.ReactElement<void> => (
  <div className={className()}>
    {children}
  </div>
);

export default Content;
