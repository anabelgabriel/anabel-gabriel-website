import * as React from 'react';
import '../../styles/components/slide-show/slide-show.scss';
import ArrowRight from '../../images/components/slide-show/arrow-right.svg';
import ArrowLeft from '../../images/components/slide-show/arrow-left.svg';
import { namespace as ns } from './index';

export const namespace = (): string => `${ns()}--slide-show`;

interface Props {
  children?: React.ReactNode;
}

interface State {
  first?: boolean;
  selected?: number;
  direction?: number;
  previous?: number;
};

class SlideShow extends React.Component<Props, State> {
  public state: State = {
    first: true,
    selected: 0,
    direction: null,
    previous: null
  };

  public refs: {
    swipe: React.ReactInstance
  };

  private hammerTime: any;

  public handlePageClick = (index: number) => {
    const direction = (index > this.state.selected) ? 1 : -1;
    this.setState({ selected: index, direction, previous: this.state.selected, first: false });
  };

  public handlePrevClick = () => {
    const max: number = React.Children.count(this.props.children);
    const next = (this.state.selected - 1) < 0 ? max - 1 : this.state.selected - 1;
    this.setState({ selected: next, direction: -1, previous: this.state.selected, first: false });
  };

  public handleNextClick = () => {
    const max: number = React.Children.count(this.props.children);
    const next = (this.state.selected + 1) >= max ? 0 : this.state.selected + 1;
    this.setState({ selected: next, direction: 1, previous: this.state.selected, first: false });
  };

  public componentDidMount() {
    const Hammer: any = require('hammerjs');
    this.hammerTime = new Hammer(this.refs.swipe, {});
    this.hammerTime.get('swipe').set({ direction: Hammer.DIRECTION_HORIZONTAL });
    this.hammerTime.on('swipe', (event) => {
      if (event.direction === Hammer.DIRECTION_LEFT) this.handleNextClick();
      else if (event.direction === Hammer.DIRECTION_RIGHT) this.handlePrevClick();
    });
  }

  public componentWillUnmount() {
    this.hammerTime.destroy();
  }

  public render() {
    const { children } = this.props;
    const { first, selected, direction, previous } = this.state;

    let selectedClassName = `${namespace()}--slides--slide-container`;
    let previousClassName = `${namespace()}--slides--slide-container`;
    if (!first && direction > 0) {
      selectedClassName += ' enter';
      previousClassName += ' leave';
    } else if (!first && direction < 0) {
      selectedClassName += ' enter-reverse';
      previousClassName += ' leave-reverse';
    }

    return (
      <div className={namespace()}>
        <div className={`${namespace()}--container`}>
          <a className={`${namespace()}--arrow ${namespace()}--arrow--left`} onClick={this.handlePrevClick}>
            <ArrowLeft className={`${namespace()}--arrow--image`}/>
          </a>
          <ul className={`${namespace()}--slides`} ref="swipe">
            {React.Children.map(children, (child: React.ReactElement<any>, index: number) => {
              if (index === selected) return <li className={selectedClassName} key={index}>{child}</li>;
              else if (index === previous) return <li className={previousClassName} key={index}>{child}</li>
            })}
          </ul>
          <a className={`${namespace()}--arrow ${namespace()}--arrow--right`} onClick={this.handleNextClick}>
            <ArrowRight className={`${namespace()}--arrow--image`}/>
          </a>
        </div>
        <div className={`${namespace()}--pagination`}>
          <ul className={`${namespace()}--pagination--list`}>
            {React.Children.map(children, this.renderPage)}
          </ul>
        </div>
      </div>
    );
  }

  private renderPage = (child, index: number) => {
    const selected = this.state.selected === index;
    return (
      <li className={`${namespace()}--pagination--list--item`}>
        <a
          onClick={() => this.handlePageClick(index)}
          className={`${namespace()}--pagination--list--item--link` + (selected ? ' selected' : '')}
        >
          <div className={`${namespace()}--pagination--list--item--link--dot`}/>
        </a>
      </li>
    );
  };
}

export default SlideShow;
