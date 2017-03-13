import * as React from 'react';
import { Paragraph, Layout, LayoutContent, Media } from '../../components';
import '../../styles/pages/home/index.scss';
import Nav from '../../app/Nav';

export const namespace = (): string => 'home';

const Home: React.SFC<void> = (): React.ReactElement<void> => {
  return (
    <Layout marginTop={0}>
      <LayoutContent maxWidth={760} desktop tablet>
        <Paragraph align="center" font="edwardian" size={30}>
          Vous êtes cordialement invités à venir célébrer le mariage de Anabel et Gabriel. Merci de bien vouloir
          prendre le temps de visiter toutes les sections du site. Au plaisir de célébrer avec vous.
        </Paragraph>
      </LayoutContent>
      <div className={`${namespace()}--images`}>
        <div
          className={`${namespace()}--images--column`}
          style={{
            backgroundImage: `url(${require('../../images/home/bar-narvark@2x.jpg')})`
          }}
        />
        <div
          className={`${namespace()}--images--column`}
          style={{
            backgroundImage: `url(${require('../../images/home/wines@2x.jpg')})`
          }}
        />
        <div
          className={`${namespace()}--images--column`}
          style={{
            backgroundImage: `url(${require('../../images/home/saint-laurent@2x.jpg')})`
          }}
        />
      </div>
      <Media mobile>
        <Nav/>
      </Media>
    </Layout>
  );
}

export default Home;
