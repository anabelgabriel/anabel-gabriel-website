import * as React from 'react';
import '../../styles/components/title/index.scss';

export const namespace = (): string => 'title';

export interface TitleProps {
  children?: React.ReactNode;
  className?: string;
  align?: 'center';
  font?: 'cormorant' | 'edwardian';
  size?: number;
}

const Title: React.SFC<TitleProps> = (
  { children, align, font, size, className: inheritedClassName }: TitleProps
): React.ReactElement<TitleProps> => {
  let className = namespace();
  if (inheritedClassName) className += ` ${inheritedClassName}`;
  if (align) className += ` align-${align}`;
  if (font) className += ` font-${font}`;

  const style: React.CSSProperties = {};
  if (size || size === 0) style.fontSize = `${size}px`;
  return (
    <h1 className={className} style={style}>
      {children}
    </h1>
  );
}

Title.defaultProps = {
  font: 'cormorant'
};

export default Title;
