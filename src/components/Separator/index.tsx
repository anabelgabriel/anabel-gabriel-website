import * as React from 'react';
import '../../styles/components/separator/index.scss';

const namespace = (): string => 'separator';

interface Props {
}

const Separator: React.SFC<Props> = (props: Props): React.ReactElement<Props> => (
  <hr className={namespace()}/>
);

export default Separator;
