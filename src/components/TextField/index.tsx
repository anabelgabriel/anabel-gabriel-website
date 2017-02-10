import * as React from 'react';
import '../../styles/components/text-field/index.scss';

export const namespace = (): string => 'text-field';

export interface TextFieldProps {
  label: string;
}

type TextFieldState = {
  value?: string;
};

class TextField extends React.Component<TextFieldProps, TextFieldState> {
  public props: TextFieldProps;
  public state: TextFieldState = {
    value: ''
  };

  public render() {
    const { label } = this.props;
    return (
      <div className={namespace()}>
        <label className={`${namespace()}--wrapper`}>
          <input
            type="text"
            className={`${namespace()}--wrapper--input`}
            value={this.state.value}
            onChange={(event: React.ChangeEvent<any>) => this.setState({ value: event.target.value})}
          />
          <span
            className={`${namespace()}--wrapper--label` + (this.state.value ? ` ${namespace()}--wrapper--label--has-content` : '')}
          >
            {label}
          </span>
          <div className={`${namespace()}--wrapper--border` + (this.state.value ? ` ${namespace()}--wrapper--border--has-content` : '')}/>
        </label>
      </div>
    );
  }
}

export default TextField;
