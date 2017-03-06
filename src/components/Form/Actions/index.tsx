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
      <div className={namespace()}>
        <div className={`${namespace()}--content` + (backdrop ? ' backdrop' : '')}>
          {children}
        </div>
      </div>
    );
  }
}

export default Actions;
