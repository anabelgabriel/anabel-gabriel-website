import * as React from 'react';
import { namespace as ns } from './SlideShow';
import '../../styles/components/slide-show/slide.scss';

const namespace = (): string => `${ns()}--slides--slide`;

interface Props {
  className?: string;
  image?: string;
}

const Slide: React.SFC<Props> = (props: Props): React.ReactElement<Props> => {
  const { image } = props;
  const imageStyle: React.CSSProperties = {
    backgroundImage: `url("${image}")`
  };
  return (
    <div className={namespace()} style={imageStyle}/>
  );
}

export default Slide;
