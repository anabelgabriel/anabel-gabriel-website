import * as React from 'react';

export interface ViewProps {
  children?: React.ReactNode;
}

const View: React.SFC<ViewProps> = ({ children }: ViewProps): React.ReactElement<ViewProps> => (
  <div>
    {children}
  </div>
);

export default View;
