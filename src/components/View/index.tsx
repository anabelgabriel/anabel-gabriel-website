import * as React from 'react';

export interface ViewProps {
  children?: React.ReactNode;
  className?: string;
}

const View: React.SFC<ViewProps> = ({ children, className }: ViewProps): React.ReactElement<ViewProps> => (
  <div className={className}>
    {children}
  </div>
);

export default View;
