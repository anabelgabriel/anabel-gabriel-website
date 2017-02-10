import * as React from 'react';
import '../../styles/components/grid/row.scss';

export const namespace = (): string => 'row';

export interface RowProps {
  children?: React.ReactNode;
}

const Row: React.SFC<RowProps> = ({ children }: RowProps): React.ReactElement<RowProps> => (
  <div className={namespace()}>
    {children}
  </div>
);

export default Row;
