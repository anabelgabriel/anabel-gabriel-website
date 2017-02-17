import * as React from 'react';
import '../../../styles/components/form/progress/step.scss';
import { namespace as ns } from './index';

export const namespace = (): string => `${ns()}--step`;

export interface StepProps {
  children?: React.ReactNode;
}

const Step: React.SFC<StepProps> = ({ children }: StepProps): React.ReactElement<StepProps> => (
  <div className={namespace()}>
    YO YO YO
  </div>
);

export default Step;
