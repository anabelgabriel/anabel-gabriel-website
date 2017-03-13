import * as React from 'react';
import { Paragraph, Layout, LayoutContent, Column, Row, View, Image, Title, Button } from '../../components';
import '../../styles/pages/narvark/index.scss';

const namespace = (): string => 'narvark';

interface Props {
}

const Narvark: React.SFC<Props> = (props: Props): React.ReactElement<Props> => (
  <Layout>
    <View className={`${namespace()}--photo`} marginBottom={20}>
      <Image src={require('../../images/narvark/narvark.jpg')} className={`${namespace()}--photo--image`}/>
    </View>
    <LayoutContent>
      <Title align="center">Île Narvark</Title>
      <Paragraph>
        Il y a un stationnement payant à l’île Charron, au coût de 20$, payable par carte de crédit. Prenez en note
        votre numéro de plaque puisque vous en aurez de besoin à la borne du stationnement.
        Prévoyez le coup, prenez un Uber ou un taxi!
      </Paragraph>
      <Paragraph align="center">
        2495 Rue de l'Île Charron<br/>Longueuil, QC J4G 1R6
      </Paragraph>
      <Row>
        <Column span={6}>
          <a
            target="_blank"
            href="https://www.google.ca/maps/place/2495+Rue+de+l'%C3%8Ele+Charron,+Longueuil,+QC+J4G+1R6/@45.5784049,-73.4918867,17z/data=!3m1!4b1!4m5!3m4!1s0x4cc91ce3baa0ba5b:0x6e36523972a87175!8m2!3d45.5784049!4d-73.489698">
            <img src={require('../../images/narvark/google-map@2x.jpg')} className={`${namespace()}--maps--image`}/>
          </a>
        </Column>
        <Column span={6}>
          <a href="/map.jpg" target="_blank">
            <img src={require('../../images/narvark/map-thumb@2x.jpg')} className={`${namespace()}--maps--image`}/>
          </a>
        </Column>
      </Row>
      <Row marginTop={20} horizontalAlign="center">
        <Button to="http://www.navark.ca">Narvark.ca</Button>
      </Row>
    </LayoutContent>
  </Layout>
);

export default Narvark;
