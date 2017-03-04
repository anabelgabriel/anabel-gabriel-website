import * as React from 'react';
import '../../styles/components/label/index.scss';

const namespace = (): string => 'label';

interface Props {
  children?: React.ReactNode;
}

const Label: React.SFC<Props> = ({ children }: Props): React.ReactElement<Props> => (
  <label className={namespace()}>
    {children}
  </label>
);

export default Label;
