import * as React from 'react';
import { namespace } from './index';
import '../../styles/components/layout/content.scss';

const className = (): string => `${namespace()}--content`;

interface Props {
  children?: React.ReactNode;
  maxWidth?: number;
}

const Content: React.SFC<Props> = ({ children, maxWidth }: Props): React.ReactElement<Props> => {
  const style: React.CSSProperties = {};
  if (maxWidth || maxWidth === 0) style.maxWidth = `${maxWidth}px`;
  return (
    <div className={className()} style={style}>
      {children}
    </div>
  );
}

export default Content;
