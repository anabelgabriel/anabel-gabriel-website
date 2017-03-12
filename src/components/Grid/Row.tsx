import * as React from 'react';
import '../../styles/components/grid/row.scss';

export const namespace = (): string => 'row';

export interface RowProps {
  children?: React.ReactNode;
  horizontalAlign?: 'center';
  marginTop?: number;
  marginBottom?: number;
  layout?: 'vertical' | 'horizontal';
}

const Row: React.SFC<RowProps> = ({ children, horizontalAlign, marginTop, marginBottom, layout }: RowProps): React.ReactElement<RowProps> => {
  const style: React.CSSProperties = {};
  if (marginTop || marginTop === 0) style.marginTop = `${marginTop}px`;
  if (marginBottom || marginBottom === 0) style.marginBottom = `${marginBottom}px`;

  let className = namespace();
  if (layout) className += ` layout-${layout}`
  if (horizontalAlign) className += ` horizontal-align-${horizontalAlign}`

  return (
    <div className={className} style={style}>
      {children}
    </div>
  );
}

export default Row;
