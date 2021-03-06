import * as React from 'react';
import '../../styles/components/paragraph/index.scss';

export const namespace = (): string => 'paragraph';

export interface ParagraphProps {
  children?: React.ReactNode;
  className?: string;
  align?: 'center';
  font?: 'cormorant' | 'edwardian';
  size?: number;
  desktop?: boolean;
  tablet?: boolean;
  mobile?: boolean;
  color?: 'gold' | 'red';
}

const Paragraph: React.SFC<ParagraphProps> = (
  { children, align, font, size, desktop, tablet, mobile, color, className: inheritedClassName }: ParagraphProps
): React.ReactElement<ParagraphProps> => {
  let className = namespace();
  if (inheritedClassName) className += ` ${inheritedClassName}`;
  if (align) className += ` align-${align}`;
  if (font) className += ` font-${font}`;
  if (color) className += ` ${color}`;

  if (desktop || tablet || mobile) {
    className += ' hide-all-except';
    if (desktop) className += ' show-desktop';
    if (tablet) className += ' show-tablet';
    if (mobile) className += ' show-mobile';
  }

  const style: React.CSSProperties = {};
  if (size || size === 0) style.fontSize = `${size}px`;
  return (
    <p className={className} style={style}>
      {children}
    </p>
  );
}

Paragraph.defaultProps = {
  color: 'gold'
};

export default Paragraph;
