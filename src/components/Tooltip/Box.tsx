import * as React from 'react';
import tether from 'react-tether2';
import '../../styles/components/tooltip/box.scss';
import { namespace as ns } from './index';

export const namespace = (): string => `${ns()}__box`;

export interface BoxProps {
  target: () => Element;
  content: React.ReactNode;
  attachment: 'top' | 'bottom';
}

@tether(
  (ownProps) => ({
    target: ownProps.target(),
    attachment: 'bottom center',
    targetAttachment: 'top center',
    constraints: [
      {
        to: 'scrollParent',
        pin: true
      },
      {
        to: 'window',
        attachment: 'together'
      }
    ]
  }),
  state => state,
  {
    style: { zIndex: 999999 }
  }
)
class Box extends React.PureComponent<BoxProps, void> {
  public static contextTypes = {
    changeAttachment: React.PropTypes.func
  };

  public props: BoxProps;
  public context: {
    changeAttachment: (attachment: 'bottom' | 'top') => void;
  };

  public componentWillReceiveProps(nextProps) {
    const targetAttachedBottom = (this.props as any).targetAttachedBottom;
    if (nextProps.targetAttachedBottom && !targetAttachedBottom) {
      this.context.changeAttachment('bottom');
    } else if (!nextProps.targetAttachedBottom && targetAttachedBottom) {
      this.context.changeAttachment('top');
    }
  }

  public render() {
    return (
      <div className={namespace() + (this.props.attachment === 'bottom' ? ` ${namespace()}--bottom` : '')}>
        <div className={`${namespace()}__wrapper`}>
          {this.props.content}
        </div>
      </div>
    );
  }
}

export default Box;
