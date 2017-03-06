import * as React from 'react';
import Button from '../../Button';
import Tooltip from '../../Tooltip';
import '../../../styles/components/form/progress/index.scss';
import { StepProps } from './Step';

export const namespace = (): string => 'form--progress';

export interface ProgressProps {
  children?: React.ReactNode;
  disableNext?: boolean;
  onBack?: () => void;
}

const Progress: React.SFC<ProgressProps> = ({ children, disableNext, onBack }: ProgressProps): React.ReactElement<ProgressProps> => {
  let steps: number = 0;
  const finalChildren = [];
  let hasSelected = false;
  let currentStep: number;
  React.Children.forEach(children, (child: React.ReactElement<StepProps>, index) => {
    steps++;
    if (child.props.selected) {
      hasSelected = true;
      currentStep = steps;
    }
    finalChildren.push(
      <li className={`${namespace()}--dots--dot`} key={index}>
        <a className={`${namespace()}--dots--dot--link`}>
          <div className={`${namespace()}--dots--dot--link--circle` + (child.props.selected ? ' selected' : (!hasSelected ? ' completed' : ''))}/>
        </a>
      </li>
    );
  });
  return (
    <div className={namespace()}>
      <div className={`${namespace()}--placeholder`}>
        {currentStep !== 1 ? <Button flat icon="prev" onClick={onBack}>Retour</Button> : null}
      </div>
      <ul className={`${namespace()}--dots`}>
        {finalChildren}
      </ul>
      <div className={`${namespace()}--placeholder`}>
        <Button flat icon="next" iconAfter submit disabled={disableNext} tooltip={<Tooltip>Veuillez remplir le formulaire avant de continuer.</Tooltip>}>Continuer</Button>
      </div>
    </div>
  );
}

export default Progress;
export { default as ProgressStep } from './Step';
