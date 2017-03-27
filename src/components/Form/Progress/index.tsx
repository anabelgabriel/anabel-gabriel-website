import * as React from 'react';
import Button from '../../Button';
import Tooltip from '../../Tooltip';
import '../../../styles/components/form/progress/index.scss';
import { StepProps } from './Step';
import { i18n } from '../../../utils';

export const namespace = (): string => 'form--progress';

export interface ProgressProps {
  lang?: any;
  children?: React.ReactNode;
  disableNext?: boolean;
  onBack?: () => void;
}

const Progress: React.SFC<ProgressProps> = ({ children, disableNext, onBack, lang }: ProgressProps): React.ReactElement<ProgressProps> => {
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
        {currentStep !== 1 ? <Button flat icon="prev" onClick={onBack}>{lang.back}</Button> : null}
      </div>
      <ul className={`${namespace()}--dots`}>
        {finalChildren}
      </ul>
      <div className={`${namespace()}--placeholder`}>
        <Button flat icon="next" iconAfter submit disabled={disableNext} tooltip={<Tooltip>{lang.complete}</Tooltip>}>
          {(steps === currentStep) ? lang.finish : lang.next}
        </Button>
      </div>
    </div>
  );
}


export default i18n({
  en: require( './lang/en.yaml'),
  fr: require( './lang/fr.yaml'),
  de: require( './lang/de.yaml'),
})(Progress);
export { default as ProgressStep } from './Step';
