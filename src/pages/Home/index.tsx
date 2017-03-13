import * as React from 'react';
import { Paragraph, Layout, LayoutContent } from '../../components';
import '../../styles/pages/home/index.scss';

export const namespace = (): string => 'home';

const Home: React.SFC<void> = (): React.ReactElement<void> => {
  return (
    <Layout marginTop={0}>
      <LayoutContent maxWidth={760} desktop tablet>
        <Paragraph align="center" font="edwardian" size={30}>
          Vous êtes invités au mariage d’Anabel et Gabriel. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Suspendisse ante nunc, commodo et pretium in, pharetra non felis.
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
    </Layout>
  );
}

export default Home;
