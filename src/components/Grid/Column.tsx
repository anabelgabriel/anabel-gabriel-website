import * as React from 'react';
import '../../styles/components/grid/column.scss';

export const namespace = (): string => 'column';

export interface ColumnProps {
  children?: React.ReactNode;
  span: number;
  mobileSpan?: number;
}

const Column: React.SFC<ColumnProps> = ({ children, span, mobileSpan }: ColumnProps): React.ReactElement<ColumnProps> => {
  let className: string = namespace();
  className += ` ${namespace()}--span-${span}`;
  if (mobileSpan) className += ` ${namespace()}--mobile-span-${span}`;

  return (
    <div className={className}>
      {children}
    </div>
  );
}

export default Column;
