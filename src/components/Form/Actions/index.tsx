import * as React from 'react';
import '../../../styles/components/form/actions/index.scss';

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
    const ua = navigator.userAgent.toLowerCase();
    if (ua.indexOf('safari') != -1) {
      if (ua.indexOf('chrome') > -1) {
        this.setState({ backdrop: false });
      } else {
        this.setState({ backdrop: true });
      }
    }
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
