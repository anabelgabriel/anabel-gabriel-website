import * as React from 'react';
import '../../styles/components/number-field/index.scss';
import Down from '../../images/components/number-field/down.svg';
import Up from '../../images/components/number-field/up.svg';

export const namespace = (): string => 'number-field';

interface Props {
  onChange: (value: number) => void;
  value: number;
  minimum: number;
  maximum: number;
  label?: string;
}

class NumberField extends React.Component<Props, void> {
  public props: Props;

  private timeout;
  private interval;

  public handleMouseDownOnDown = () => {
    this.clearInterval();
    this.decrement();
    this.timeout = setTimeout(() => {
      this.interval = setInterval(this.decrement, 75);
    }, 350);
  };

  public handleMouseDownOnUp = () => {
    this.clearInterval();
    this.increment();
    this.timeout = setTimeout(() => {
      this.interval = setInterval(this.increment, 75);
    }, 350);
  };

  public clearInterval = () => {
    clearTimeout(this.timeout);
    clearInterval(this.interval);
  };

  public decrement = () => {
    const nextValue = this.props.value - 1;
    if (this.props.minimum === undefined || this.props.minimum === null || nextValue >= this.props.minimum) {
      this.props.onChange(nextValue);
    }
  };

  public increment = () => {
    const nextValue = this.props.value + 1;
    if (this.props.maximum === undefined || this.props.maximum === null || nextValue <= this.props.maximum) {
      this.props.onChange(nextValue);
    }
  };

  public handleChange = (event: React.ChangeEvent<any>) => {
    this.props.onChange(event.target.value);
  };

  public render() {
    const { minimum, value, maximum, label } = this.props;
    return (
      <div className={namespace()}>
        {label ? <span className={`${namespace()}--label`}>{label}</span> : null}
        <a
          className={`${namespace()}--spin down` + (value <= minimum ? ' blocked' : '')}
          onMouseDown={this.handleMouseDownOnDown}
          onMouseUp={this.clearInterval}
        >
          <Down/>
        </a>
        <label className={`${namespace()}--container`}>
          <input
            type="number"
            className={`${namespace()}--input`}
            min={minimum !== undefined ? minimum : 0}
            step={1}
            pattern="[0-9]"
            value={value}
            onChange={this.handleChange}
          />
          <div className={`${namespace()}--border`}/>
        </label>
        <a
          className={`${namespace()}--spin up` + (value >= maximum ? ' blocked' : '')}
          onMouseDown={this.handleMouseDownOnUp}
          onMouseUp={this.clearInterval}
        >
          <Up/>
        </a>
      </div>
    );
  }
}

export default NumberField;
