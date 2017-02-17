import * as React from 'react';
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
      <ul>
        <li>o</li>
      </ul>
    </div>
  );
}

export default Progress;
export { default as ProgressStep } from './Step';
