import * as React from 'react';
import { namespace as ns } from './index';
import '../../styles/components/tooltip/tip.scss';

export const namespace = (): string => `${ns()}__tip`;

export interface TipProps {
  attachment: 'top' | 'bottom';
}

class Tip extends React.PureComponent<TipProps, void> {
  public props: TipProps;

  public render() {
    return (
      <div className={namespace() + (this.props.attachment === 'bottom' ? ` ${namespace()}--bottom` : '')}/>
    );
  }
}

export default Tip;
