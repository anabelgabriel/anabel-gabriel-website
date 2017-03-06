import * as React from 'react';
import '../../styles/components/grid/row.scss';

export const namespace = (): string => 'row';

export interface RowProps {
  children?: React.ReactNode;
  horizontalAlign?: 'center';
  marginTop?: number;
  marginBottom?: number;
}

const Row: React.SFC<RowProps> = ({ children, horizontalAlign, marginTop, marginBottom }: RowProps): React.ReactElement<RowProps> => {
  const style: React.CSSProperties = {};
  if (marginTop || marginTop === 0) style.marginTop = `${marginTop}px`;
  if (marginBottom || marginBottom === 0) style.marginBottom = `${marginBottom}px`;
  return (
    <div className={namespace() + (horizontalAlign ? ` horizontal-align-${horizontalAlign}` : '')} style={style}>
      {children}
    </div>
  );
}

export default Row;
