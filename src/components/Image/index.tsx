import * as React from 'react';
import '../../styles/components/image/index.scss';

interface Props {
  width?: number;
  height?: number;
  src: any;
  className?: string;
}

const Image: React.SFC<Props> = ({ src, width, height, className }: Props): React.ReactElement<Props> => (
  <img src={src} width={`${width}px`} height={`${height}px`} className={'image' + (className ? ` ${className}` : '')}/>
);

export default Image;
