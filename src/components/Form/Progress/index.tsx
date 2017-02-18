import * as React from 'react';
import Button from '../../Button';
import '../../../styles/components/form/progress/index.scss';

export const namespace = (): string => 'form--progress';

export interface ProgressProps {
  children?: React.ReactNode;
}

const Progress: React.SFC<ProgressProps> = ({ children }: ProgressProps): React.ReactElement<ProgressProps> => {
  let steps: number = 0;
  React.Children.forEach(children, (child: React.ReactElement<any>) => {
    steps++;
  });
  return (
    <div className={namespace()}>
      <div className={`${namespace()}--placeholder`}/>
      <ul className={`${namespace()}--dots`}>
        <li className={`${namespace()}--dots--dot`}/>
      </ul>
      <div className={`${namespace()}--placeholder`}>
        <Button flat>Continuer</Button>
      </div>
    </div>
  );
}

export default Progress;
export { default as ProgressStep } from './Step';
