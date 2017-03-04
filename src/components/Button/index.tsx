import * as React from 'react';
import { findDOMNode } from 'react-dom';
import '../../styles/components/button/index.scss';
import { NextIcon, PrevIcon } from '../../icons'

export const namespace = (): string => 'button';

export interface ButtonProps {
  children?: React.ReactNode;
  tooltip?: React.ReactElement<any>;
  submit?: boolean;
  flat?: boolean;
  iconAfter?: boolean;
  icon?: 'next' | 'prev';
  disabled?: boolean;
  loading?: boolean;
}

interface ButtonState {
  showTooltip?: boolean;
}

class Button extends React.PureComponent<ButtonProps, ButtonState> {
  public props: ButtonProps;
  public state: ButtonState = {
    showTooltip: false
  };

  public handleMouseOver = () => {
    this.setState({ showTooltip: true });
  };

  public handleMouseOut = () => {
    this.setState({ showTooltip: false });
  };

  public handleTouchStart = () => {
    if (!this.state.showTooltip) {
      document.addEventListener('touchstart', this.handleTouchOut);
    }
    this.setState({ showTooltip: !this.state.showTooltip });
  };

  public handleTouchOut = () => {
    document.removeEventListener('touchstart', this.handleTouchOut);
    this.setState({ showTooltip: false });
  };

  public render() {
    const { submit, children, flat, icon, disabled, tooltip, iconAfter, loading } = this.props;
    const { showTooltip } = this.state;
    let className = namespace();
    let buttonClassName = `${namespace()}--button`;
    if (flat) buttonClassName += ` flat`;

    let iconComponent: React.ReactElement<any>;
    if (icon && typeof icon === 'string') {
      switch (icon) {
        case 'next':
          iconComponent = <NextIcon className={`${namespace()}--button--icon`}/>;
          break;
        case 'prev':
          iconComponent = <PrevIcon className={`${namespace()}--button--icon`}/>;
          break;
      }
    }

    let finalChildren: React.ReactNode = children;
    if (typeof finalChildren === 'string') finalChildren = <span className={`${namespace()}--button--text`}>{children}</span>;

    return (
      <div
        className={className}
        onMouseOver={disabled ? this.handleMouseOver : null}
        onMouseOut={disabled ? this.handleMouseOut : null}
        onTouchStart={disabled ? this.handleTouchStart : null}
      >
        {loading ? (
          <img src={require('../../images/components/loader/loader.gif')}/>
        ) : (
          <button type={submit ? 'submit' : 'button'} className={buttonClassName} disabled={disabled}>
            {!iconAfter ? iconComponent : null}
            {finalChildren}
            {iconAfter ? iconComponent : null}
          </button>
        )}
        {disabled && tooltip && showTooltip ? React.cloneElement(tooltip, { ...tooltip.props, target: () => findDOMNode(this) }) : null}
      </div>
    );
  }
}

export default Button;
