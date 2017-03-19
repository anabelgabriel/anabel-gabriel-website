import * as React from 'react';
import { Paragraph, Layout, LayoutContent, Media, Row, Button } from '../../components';
import '../../styles/pages/home/index.scss';
import Nav from '../../app/Nav';
import { i18n } from '../../utils';

export const namespace = (): string => 'home';

const Home: React.SFC<void> = ({ lang }: any): React.ReactElement<void> => {
  return (
    <Layout marginTop={0}>
      <LayoutContent maxWidth={760} desktop tablet>
        <Paragraph align="center" font="edwardian" size={30}>
          {lang.intro}
        </Paragraph>
      </LayoutContent>
      <div className={`${namespace()}--images`}>
        <div
          className={`${namespace()}--images--column`}
          style={{
            backgroundImage: `url(${require('../../images/home/bar-navark@2x.jpg')})`
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
      <Media desktop tablet>
        <Row horizontalAlign="center" marginTop={40}>
          <Button to="/rsvp">{lang.rsvp}</Button>
        </Row>
      </Media>
      <Media mobile>
        <Nav/>
      </Media>
    </Layout>
  );
}

export default i18n({
  en: require( './lang/en.yaml'),
  fr: require( './lang/fr.yaml'),
  de: require( './lang/de.yaml'),
})(Home);
