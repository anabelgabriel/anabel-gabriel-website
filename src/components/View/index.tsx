import * as React from 'react';

export interface ViewProps {
  children?: React.ReactNode;
  className?: string;
  marginBottom?: number;
}

const View: React.SFC<ViewProps> = ({ children, className, marginBottom }: ViewProps): React.ReactElement<ViewProps> => {
  const style: React.CSSProperties = {};
  if (marginBottom || marginBottom === 0) style.marginBottom = `${marginBottom}px`;
  return (
    <div className={className} style={style}>
      {children}
    </div>
  );
}

export default View;
