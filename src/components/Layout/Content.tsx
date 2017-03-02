import * as React from 'react';
import { namespace as ns } from './index';
import '../../styles/components/layout/content.scss';

const namespace = (): string => `${ns()}--content`;

interface Props {
  children?: React.ReactNode;
  maxWidth?: number;
  desktop?: boolean;
  tablet?: boolean;
  mobile?: boolean;
}

const Content: React.SFC<Props> = ({ children, maxWidth, desktop, tablet, mobile }: Props): React.ReactElement<Props> => {
  let className = namespace();
  if (desktop || tablet || mobile) {
    className += ' hide-all-except';
    if (desktop) className += ' desktop';
    if (tablet) className += ' tablet';
    if (mobile) className += ' mobile';
  }

  const style: React.CSSProperties = {};
  if (maxWidth || maxWidth === 0) style.maxWidth = `${maxWidth}px`;
  return (
    <div className={className} style={style}>
      {children}
    </div>
  );
}

export default Content;
