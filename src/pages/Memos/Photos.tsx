import * as React from 'react';
import '../../styles/pages/memos/index.scss';
import firebase from 'firebase';
import { SlideShow, Slide } from '../../components';

const namespace = (): string => 'memos--photos';

interface Props {
  photos: Array<string>;
}

interface State {
  photos: Array<string>;
  slideShowOpen: boolean;
}

class Photos extends React.Component<Props, State> {
  public state: State = {
    photos: null,
    slideShowOpen: false
  }

  public handleClick = () => {
    this.setState({ slideShowOpen: !this.state.slideShowOpen });
  };

  public componentWillMount() {
    const ref = firebase.storage().ref('blog');
    Promise.all(this.props.photos.map(photo => ref.child(photo.replace(/^blog\//, '')).getDownloadURL()))
      .then((photosUris) => this.setState({ photos: photosUris }));
  }

  public render() {
    const { photos } = this.state;
    if (!photos) return null;
    let children;
    if (photos.length === 1) {
      children = this.renderHero();
    } else if (photos.length === 2) {
      children = this.renderSidekick();
    } else {
      children = this.renderSidekicks();
    }
    return (
      <div className={namespace()}>
        <a className={`${namespace()}--button`} onClick={this.handleClick}>
          {children}
        </a>
        <SlideShow open={this.state.slideShowOpen} onClose={() => this.setState({ slideShowOpen: false })}>
          {photos.map(photo => <Slide key={photo} image={photo}/>)}
        </SlideShow>
      </div>
    );
  }

  private renderHero() {
    const { photos } = this.state;
    const heroFullStyle: React.CSSProperties = {};
    heroFullStyle.backgroundImage = `url(${photos[0]})`;
    return (
      <div className={`${namespace()}--button--image`}>
        <div className={`${namespace()}--button--image--item hero-full`} style={heroFullStyle}/>
      </div>
    );
  }

  private renderSidekick() {
    const { photos } = this.state;
    const heroStyle: React.CSSProperties = {};
    heroStyle.backgroundImage = `url(${photos[0]})`;
    const sidekickStyle: React.CSSProperties = {};
    sidekickStyle.backgroundImage = `url(${photos[1]})`;
    return (
      <div className={`${namespace()}--button--image`}>
        <div className={`${namespace()}--button--image--item hero`} style={heroStyle}/>
        <div className={`${namespace()}--button--image--item sidekick`} style={sidekickStyle}/>
      </div>
    );
  }

  private renderSidekicks() {
    const { photos } = this.state;
    const heroStyle: React.CSSProperties = {};
    heroStyle.backgroundImage = `url(${photos[0]})`;
    const sidekick1Style: React.CSSProperties = {};
    sidekick1Style.backgroundImage = `url(${photos[1]})`;
    const sidekick2Style: React.CSSProperties = {};
    sidekick2Style.backgroundImage = `url(${photos[2]})`;
    return (
      <div className={`${namespace()}--button--image`}>
        <div className={`${namespace()}--button--image--item sidekick-1`} style={sidekick1Style}/>
        <div className={`${namespace()}--button--image--item hero-1`} style={heroStyle}/>
        <div className={`${namespace()}--button--image--item sidekick-2`} style={sidekick2Style}/>
      </div>
    );
  }
}

export default Photos;
