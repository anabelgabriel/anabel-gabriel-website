import * as React from 'react';
import '../../styles/components/button/index.scss';

export const namespace = (): string => 'button';

export interface ButtonProps {
  children?: React.ReactNode;
  submit?: boolean;
  flat?: boolean;
}

const Button: React.SFC<ButtonProps> = ({ submit, children, flat }: ButtonProps): React.ReactElement<ButtonProps> => {
  let className = namespace();
  if (flat) className += ` ${namespace()}--flat`;
  return (
    <button type={submit ? 'submit' : 'button'} className={className}>
      {children}
    </button>
  );
}

export default Button;
