import * as React from 'react';
import { Paragraph, Layout, LayoutContent, Column, Row, View, Image, Title, Button } from '../../components';
import '../../styles/pages/navark/index.scss';
import { i18n } from '../../utils';

const namespace = (): string => 'navark';

const Navark: React.SFC<void> = ({ lang }: any): React.ReactElement<void> => (
  <Layout>
    <View className={`${namespace()}--photo`} marginBottom={20}>
      <Image src={require('../../images/navark/navark.jpg')} className={`${namespace()}--photo--image`}/>
    </View>
    <LayoutContent>
      <Title align="center">{lang.title}</Title>
      <Paragraph>
        {lang.p1}
      </Paragraph>
      <Paragraph align="center">
        {lang.adress[0]}<br/>{lang.adress[1]}
      </Paragraph>
      <Row>
        <Column span={6}>
          <a
            target="_blank"
            href="https://www.google.ca/maps/place/2495+Rue+de+l'%C3%8Ele+Charron,+Longueuil,+QC+J4G+1R6/@45.5784049,-73.4918867,17z/data=!3m1!4b1!4m5!3m4!1s0x4cc91ce3baa0ba5b:0x6e36523972a87175!8m2!3d45.5784049!4d-73.489698">
            <img src={require('../../images/navark/google-map@2x.jpg')} className={`${namespace()}--maps--image`}/>
          </a>
        </Column>
        <Column span={6}>
          <a href="/map.jpg" target="_blank">
            <img src={require('../../images/navark/map-thumb@2x.jpg')} className={`${namespace()}--maps--image`}/>
          </a>
        </Column>
      </Row>
      <Row marginTop={20} horizontalAlign="center">
        <Button to="http://www.navark.ca">{lang.navark}</Button>
      </Row>
    </LayoutContent>
  </Layout>
);

export default i18n({
  en: require( './lang/en.yaml'),
  fr: require( './lang/fr.yaml'),
})(Navark);
