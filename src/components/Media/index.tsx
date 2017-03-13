import * as React from 'react';
import '../../styles/components/media/index.scss';

interface Props {
  children?: React.ReactNode;
  mobile?: boolean;
  tablet?: boolean;
  desktop?: boolean;
}

const Media: React.SFC<Props> = ({ children, mobile, tablet, desktop }: Props): React.ReactElement<Props> => {
  let className = 'media';
  if (mobile) className += ' mobile';
  if (tablet) className += ' tablet';
  if (desktop) className += ' desktop';
  return (
    <div className={className}>
      {children}
    </div>
  );
}

export default Media;
