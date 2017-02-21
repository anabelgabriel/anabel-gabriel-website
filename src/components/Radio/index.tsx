import * as React from 'react';
import '../../styles/components/radio/index.scss';

export const namespace = (): string => 'radio';

export interface RadioProps {
  label: string;
  value: boolean | number | string;
}

type RadioContext = {
  name: string;
  onChange: (value: boolean | number | string) => void;
};

const Radio: React.SFC<RadioProps> = ({ label, value }: RadioProps, { name, onChange }: RadioContext): React.ReactElement<RadioProps> => {
  let finalValue: string | number;
  if (typeof value === 'boolean') finalValue = value ? '1' : '0';
  else finalValue = value;
  return (
    <label className={namespace()}>
      <input type="radio" className={`${namespace()}--input`} name={name} onChange={(event) => {
      if (typeof value === 'boolean') {
        onChange(event.target.value == '1' ? true : false);
      } else {
        onChange(event.target.value);
      }
    }} value={finalValue}/>
      <div className={`${namespace()}--checkbox`}/>
      <span className={`${namespace()}--label`}>{label}</span>
    </label>
  );
}

Radio.contextTypes = {
  name: React.PropTypes.string,
  onChange: React.PropTypes.func
};

export default Radio;
export { default as RadioGroup } from './Group';
