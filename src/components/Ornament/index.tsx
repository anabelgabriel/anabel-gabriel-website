import * as React from 'react';
import Separation from '../../images/ornaments/separation.svg';
import '../../styles/components/ornament/index.scss';

const namespace = (): string => 'ornament';

interface Props {
  type?: 'separation';
}

const Ornament: React.SFC<Props> = ({ type }: Props): React.ReactElement<Props> => {
  switch (type) {
    case 'separation':
      return <Separation className={namespace()}/>;
  }
}

Ornament.defaultProps = {
  type: 'separation'
};

export default Ornament;
