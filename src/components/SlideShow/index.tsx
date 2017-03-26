import * as React from 'react';
import { findDOMNode } from 'react-dom';
import '../../styles/components/slide-show/index.scss';
import { whichAnimationEvent } from '../../utils';
import CloseIcon from '../../images/components/slide-show/close.svg';
import SlideShow from './SlideShow';
import { observer, inject } from 'mobx-react';
import App from "../../stores/App";

export const namespace = (): string => 'slide-show';

interface Props {
  children?: React.ReactNode;
  open: boolean;
  onClose: () => void;
  app?: App;
}

interface State {
  closing?: boolean;
  entering?: boolean;
}

@inject('app') @observer
class Modal extends React.Component<Props, State> {
  public props: Props;
  public state: State = {
    closing: false,
    entering: false,
  };

  public componentDidMount() {
    if (this.props.open) {
      this.open();
    }
  }

  public componentDidUpdate(prevProps: Props) {
    if (this.props.open !== prevProps.open) {
      if (this.props.open) this.open();
      else this.close();
    }
  }

  public handleBackdropClick = () => {
    this.props.onClose();
  };

  public close = () => {
    this.props.app.modalOpen = false;
    const element = findDOMNode(this).getElementsByTagName('section')[0];
    const handleAnimationEnd = () => {
      element.removeEventListener(whichAnimationEvent(), handleAnimationEnd);
      this.setState({ closing: false });
    };
    element.addEventListener(whichAnimationEvent(), handleAnimationEnd);
    this.setState({ closing: true, entering: false });
  };

  public open = () => {
    this.props.app.modalOpen = true;
    const element = findDOMNode(this).getElementsByTagName('section')[0];
    const handleAnimationEnd = () => {
      element.removeEventListener(whichAnimationEvent(), handleAnimationEnd);
      this.setState({ entering: false });
    };
    element.addEventListener(whichAnimationEvent(), handleAnimationEnd);
    this.setState({ entering: true, closing: false });
  };

  public render() {
    const { children, open } = this.props;
    const { entering, closing } = this.state;

    let backdropClassName: string = `${namespace()}--backdrop`;
    let windowClassName: string = `${namespace()}--window`;
    if (open) {
      backdropClassName += ' open';
      windowClassName += ' open';
    } else {
      backdropClassName += ' closed';
      windowClassName += ' closed';
    }

    if (entering) {
      backdropClassName += ' enter';
      windowClassName += ' enter';
    } else if (closing) {
      backdropClassName += ' leave';
      windowClassName += ' leave';
    }

    return (
      <div className={namespace()}>
        <div onClick={this.handleBackdropClick} className={backdropClassName}>
          <a onClick={this.handleBackdropClick} className={`${namespace()}--close`}>
            <CloseIcon className={`${namespace()}--close--icon`}/>
          </a>
        </div>
        <section className={windowClassName}>
          <div className={`${namespace()}--window--content`}>
            <SlideShow>
              {children}
            </SlideShow>
          </div>
        </section>
      </div>
    );
  }
}

export default Modal;
export { default as Slide } from './Slide';
