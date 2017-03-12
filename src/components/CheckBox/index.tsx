import * as React from 'react';
import '../../styles/components/check-box/index.scss';
import CheckMark from '../../images/components/check-box/checkmark.svg';

const namespace = (): string => 'check-box';

interface RadioProps {
  label: string;
  onChange: (value: boolean) => void;
  selected: boolean;
}

const CheckBox: React.SFC<RadioProps> = ({ label, onChange, selected }: RadioProps): React.ReactElement<RadioProps> => {
  return (
    <label className={namespace()}>
      <input type="checkbox" className={`${namespace()}--input`} onChange={(event) => {
        onChange(event.target.checked);
      }} checked={selected ? true : false}/>
      <div className={`${namespace()}--checkbox`}>
        <CheckMark className={`${namespace()}--checkbox--checkmark`}/>
      </div>
      <span className={`${namespace()}--label`}>{label}</span>
    </label>
  );
}

export default CheckBox;
