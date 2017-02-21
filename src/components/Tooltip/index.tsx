import * as React from 'react';
import '../../styles/components/tooltip/index.scss';
import Tip from './Tip';
import Box from './Box';

export const namespace = (): string => 'tooltip';

export interface TooltipProps {
  className?: string;
  target?: () => Element;
  children?: React.ReactNode;
}

type TooltipState = {
  attachment: 'top' | 'bottom';
};

class Tooltip extends React.PureComponent<TooltipProps, TooltipState> {
  public static childContextTypes = {
    changeAttachment: React.PropTypes.func
  };

  public props: TooltipProps;
  public state: TooltipState = {
    attachment: 'top'
  };

  public getChildContext = () => ({
    changeAttachment: this.changeAttachment
  });

  public changeAttachment = (attachment: 'bottom' | 'top') => this.setState({ attachment });

  public render() {
    const { target, children } = this.props;
    const { attachment } = this.state;
    return (
      <div className={namespace()}>
        <Box target={target} content={children} attachment={attachment}/>
        <Tip attachment={attachment}/>
      </div>
    );
  }
}

export default Tooltip;
