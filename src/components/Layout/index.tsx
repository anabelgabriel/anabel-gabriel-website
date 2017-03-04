import * as React from 'react';
import '../../styles/components/layout/index.scss';

export const namespace = (): string => 'layout';

interface Props {
  children?: React.ReactNode;
  className?: string;
}

const Layout: React.SFC<Props> = ({ children, className }: Props): React.ReactElement<Props> => (
  <div className={namespace() + (className ? ` ${className}` : '')}>
    {children}
  </div>
);

export default Layout;
export { default as LayoutContent } from './Content';
