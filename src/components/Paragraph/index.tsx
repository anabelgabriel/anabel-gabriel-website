import * as React from 'react';
import '../../styles/components/paragraph/index.scss';

export const namespace = (): string => 'paragraph';

export interface ParagraphProps {
  children?: React.ReactNode;
  align?: 'center';
  font?: 'cormorant' | 'edwardian';
  size?: number;
}

const Paragraph: React.SFC<ParagraphProps> = ({ children, align, font, size }: ParagraphProps): React.ReactElement<ParagraphProps> => {
  let className = namespace();
  if (align) className += ` align-${align}`;
  if (font) className += ` font-${font}`;
  const style: React.CSSProperties = {};
  if (size || size === 0) style.fontSize = `${size}px`;
  return (
    <p className={className} style={style}>
      {children}
    </p>
  );
}

export default Paragraph;
