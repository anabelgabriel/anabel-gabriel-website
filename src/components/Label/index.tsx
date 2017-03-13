import * as React from 'react';
import '../../styles/components/label/index.scss';

const namespace = (): string => 'label';

interface Props {
  children?: React.ReactNode;
  lineHeight?: number;
}

const Label: React.SFC<Props> = ({ children, lineHeight }: Props): React.ReactElement<Props> => {
  const style: React.CSSProperties = {};
  if (lineHeight || lineHeight === 0) style.lineHeight = lineHeight;
  return (
    <label className={namespace()} style={style}>
      {children}
    </label>
  );
}

export default Label;
