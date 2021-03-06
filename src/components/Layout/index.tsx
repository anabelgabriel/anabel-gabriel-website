import * as React from 'react';
import '../../styles/components/layout/index.scss';

export const namespace = (): string => 'layout';

interface Props {
  children?: React.ReactNode;
  className?: string;
  marginTop?: number;
}

const Layout: React.SFC<Props> = ({ children, className, marginTop }: Props): React.ReactElement<Props> => {
  const style: React.CSSProperties = {};
  if (marginTop || marginTop === 0) style.marginTop = `${marginTop}px`;
  return (
    <div style={style} className={namespace() + (className ? ` ${className}` : '')}>
      {children}
    </div>
  );
}

export default Layout;
export { default as LayoutContent } from './Content';
