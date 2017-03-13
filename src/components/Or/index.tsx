import * as React from 'react';
import '../../styles/components/or/index.scss';

interface Props {
  children?: React.ReactNode;
}

const Or: React.SFC<Props> = ({ children }: Props): React.ReactElement<Props> => (
  <div className="or">
    <span className="or--text">
      {children}
    </span>
  </div>
);

export default Or;
