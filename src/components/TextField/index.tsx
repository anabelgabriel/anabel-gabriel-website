import * as React from 'react';
import { findDOMNode } from 'react-dom';
import '../../styles/components/text-field/index.scss';
import { CheckMarkIcon } from '../../icons';

const namespace = (): string => 'text-field';

interface Props {
  label: string;
  autoFill?: string;
  type?: 'name' | 'email';
  value?: number | string;
  onChange?: (value: boolean | number | string) => void;
  valid?: boolean;
}

interface State {
  value?: string;
};

class TextField<P extends Props> extends React.Component<Props, State> {
  public props: Props;
  public state: State = {
    value: ''
  };

  public componentDidMount() {
    if (!this.isControlled) {
      const updateValue = () => this.setState({ value: findDOMNode(this).getElementsByTagName('input')[0].value });
      setTimeout(updateValue, 0);
      setTimeout(updateValue, 10);
      setTimeout(updateValue, 100);
      setTimeout(updateValue, 1000);
    }
  }

  private get isControlled(): boolean {
    return typeof this.props.value !== 'undefined';
  }

  private get value() {
    return this.isControlled ? this.props.value : this.state.value;
  }

  public render() {
    const { label, autoFill, type, onChange, valid } = this.props;

    let finalType: string = type;
    if (type === 'name') finalType = 'text';

    let value = this.isControlled ? this.props.value : this.state.value;
    if (!value) value = '';
    return (
      <div className={namespace()}>
        <label className={`${namespace()}--wrapper`}>
          <input
            type={finalType}
            name={autoFill}
            className={`${namespace()}--wrapper--input`}
            value={value}
            onChange={(event: React.ChangeEvent<any>) => {
              if (!this.isControlled) this.setState({ value: event.target.value});
              if (onChange) onChange(event.target.value);
            }}
          />
          <span
            className={`${namespace()}--wrapper--label` + (this.value ? ` ${namespace()}--wrapper--label--has-content` : '')}
          >
            {label}
          </span>
          {valid ? (
            <div className={`${namespace()}--wrapper--valid-icon`}>
              <CheckMarkIcon width={16} height={16} className={`${namespace()}--wrapper--valid-icon--image`}/>
            </div>
          ) : null}
          <div className={`${namespace()}--wrapper--border` + (this.value ? ` ${namespace()}--wrapper--border--has-content` : '')}/>
        </label>
      </div>
    );
  }
}

export default TextField;
