import * as React from 'react';
import '../../../styles/components/form/actions/index.scss';
import { isSafari } from '../../../utils';

export const namespace = (): string => 'form--actions';

export interface ActionsProps {
  children?: React.ReactNode;
}

type ActionsState = {
  backdrop: boolean;
};

class Actions extends React.Component<ActionsProps, ActionsState> {
  public props: ActionsProps;

  public state: ActionsState = {
    backdrop: false
  };

  public componentWillMount() {
    this.setState({ backdrop: isSafari() });
  }

  public render() {
    const { children } = this.props;
    const { backdrop } = this.state;
    return (
      <div className={namespace() + (backdrop ? ` ${namespace()}--backdrop` : '')}>
        {children}
      </div>
    );
  }
}

export default Actions;
