import * as React from 'react';
import '../../styles/components/grid/column.scss';

export const namespace = (): string => 'column';

export interface ColumnProps {
  children?: React.ReactNode;
  span: number;
  mobileSpan?: number;
  verticalAlign?: 'top' | 'center' | 'bottom';
  horizontalAlign?: 'left' | 'center' | 'right';
  layout?: 'vertical' | 'horizontal';
}

const Column: React.SFC<ColumnProps> = ({ children, span, mobileSpan, verticalAlign, horizontalAlign, layout }: ColumnProps): React.ReactElement<ColumnProps> => {
  let className: string = namespace();
  className += ` span-${span}`;
  if (mobileSpan) className += ` mobile-span-${mobileSpan}`;
  if (verticalAlign) className += ` vertical-align-${verticalAlign}`;
  if (horizontalAlign) className += ` horizontal-align-${horizontalAlign}`;
  if (layout) className += ` layout-${layout}`;

  return (
    <div className={className}>
      {children}
    </div>
  );
}

export default Column;
