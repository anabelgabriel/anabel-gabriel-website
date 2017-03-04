import * as React from 'react';
import Button from '../../Button';
import Tooltip from '../../Tooltip';
import '../../../styles/components/form/progress/index.scss';
import { StepProps } from './Step';

export const namespace = (): string => 'form--progress';

export interface ProgressProps {
  children?: React.ReactNode;
  nextDisabled?: boolean;
}

const Progress: React.SFC<ProgressProps> = ({ children, nextDisabled }: ProgressProps): React.ReactElement<ProgressProps> => {
  let steps: number = 0;
  const finalChildren = [];
  let hasSelected = false;
  React.Children.forEach(children, (child: React.ReactElement<StepProps>, index) => {
    steps++;
    if (child.props.selected) hasSelected = true;
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
        <Button flat icon="prev" submit disabled={nextDisabled}>Retour</Button>
      </div>
      <ul className={`${namespace()}--dots`}>
        {finalChildren}
      </ul>
      <div className={`${namespace()}--placeholder`}>
        <Button flat icon="next" iconAfter submit disabled={nextDisabled} tooltip={<Tooltip>Veuillez remplir le formulaire avant de continuer.</Tooltip>}>Continuer</Button>
      </div>
    </div>
  );
}

export default Progress;
export { default as ProgressStep } from './Step';
