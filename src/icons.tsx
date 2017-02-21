import * as React from 'react';

export interface IconProps {
  width?: number;
  height?: number;
  className?: string;
}

const Icon = (Element: React.ReactType): React.SFC<IconProps> => ({ className, width, height }: IconProps): React.ReactElement<IconProps> => {
  const element = <Element/>;
  const props = { ...element.props };
  if (className) props.className = (props.className ? props.className + ' ' : '') + className;
  if (width || width === 0) props.width = `${width}px`;
  if (height || height === 0) props.height = `${height}px`;
  return React.cloneElement(element, props);
};

import Next from './images/icons/next.svg';
export const NextIcon = Icon(Next);
