import * as React from 'react';
import '../../styles/components/paragraph/index.scss';

export const namespace = (): string => 'paragraph';

export interface ParagraphProps {
  children?: React.ReactNode;
  align?: 'center';
  font?: 'cormorant' | 'edwardian';
  size?: number;
  desktop?: boolean;
  tablet?: boolean;
  mobile?: boolean;
}

const Paragraph: React.SFC<ParagraphProps> = (
  { children, align, font, size, desktop, tablet, mobile }: ParagraphProps
): React.ReactElement<ParagraphProps> => {
  let className = namespace();
  if (align) className += ` align-${align}`;
  if (font) className += ` font-${font}`;

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

export default Paragraph;
