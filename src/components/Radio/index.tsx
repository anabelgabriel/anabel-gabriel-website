import * as React from 'react';
import '../../styles/components/radio/index.scss';

export const namespace = (): string => 'radio';

export interface RadioProps {
  label: string;
}

type RadioContext = {
  name: string;
};

const Radio: React.SFC<RadioProps> = ({ label }: RadioProps, { name }: RadioContext): React.ReactElement<RadioProps> => (
  <label className={namespace()}>
    <input type="radio" className={`${namespace()}--input`} name={name}/>
    <div className={`${namespace()}--checkbox`}/>
    <span className={`${namespace()}--label`}>{label}</span>
  </label>
);

Radio.contextTypes = {
  name: React.PropTypes.string
};

export default Radio;
export { default as RadioGroup } from './Group';
