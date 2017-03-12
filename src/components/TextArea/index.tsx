import * as React from 'react';
import '../../styles/components/text-area/index.scss';

const namespace = (): string => 'text-area';

interface Props {
  value: string;
  onChange: (value: string) => void;
  label?: string;
}

const TextArea: React.SFC<Props> = ({ value, onChange, label }: Props): React.ReactElement<Props> => (
  <div className={namespace()}>
    <label className={`${namespace()}--wrapper`}>
      <textarea
        className={`${namespace()}--wrapper--input`}
        value={value ? value : ''}
        onChange={(event) => onChange(event.target.value)}
      />
      <span
        className={`${namespace()}--wrapper--label` + (value ? ' has-content' : '')}
      >
        {label}
      </span>
      <div className={`${namespace()}--wrapper--border` + (value ? ' has-content' : '')}/>
    </label>
  </div>
);

export default TextArea;
