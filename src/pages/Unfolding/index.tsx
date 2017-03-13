import * as React from 'react';
import { Paragraph, Layout, LayoutContent, Column, Row, Label, Image, Title, Button } from '../../components';

interface Props {
}

const Unfolding: React.SFC<Props> = (props: Props): React.ReactElement<Props> => (
  <Layout>
    <LayoutContent>
      <Title align="center">Déroulement</Title>
      <Paragraph>
        Vous êtes invités à arriver au stationnement (payant) à partir de 15h30. La navette fluviale commencera à
        faire la traversée dès 16h00 afin que tous soient sur l’île à temps.
      </Paragraph>
      <Paragraph>
        À noter que la navette fluviale est accessible tout au long de la soirée.
      </Paragraph>
      <Row>
        <Column span={3}><Label lineHeight={1.5}>15h30</Label></Column>
        <Column span={9}><Paragraph font="cormorant" size={17}>Arrivée au stationnement</Paragraph></Column>
      </Row>
      <Row>
        <Column span={3}><Label lineHeight={1.5}>16h00</Label></Column>
        <Column span={9}><Paragraph font="cormorant" size={17}>Traverse fluviale</Paragraph></Column>
      </Row>
      <Row>
        <Column span={3}><Label lineHeight={1.5}>16h25</Label></Column>
        <Column span={9}><Paragraph font="cormorant" size={17}>Arrivée du cortège et des mariés</Paragraph></Column>
      </Row>
      <Row>
        <Column span={3}><Label lineHeight={1.5}>16h30</Label></Column>
        <Column span={9}><Paragraph font="cormorant" size={17}>Cérémonie</Paragraph></Column>
      </Row>
      <Row>
        <Column span={3}><Label lineHeight={1.5}></Label></Column>
        <Column span={9}><Paragraph font="cormorant" size={17}>Cocktail</Paragraph></Column>
      </Row>
      <Row>
        <Column span={3}><Label lineHeight={1.5}></Label></Column>
        <Column span={9}><Paragraph font="cormorant" size={17}>Repas</Paragraph></Column>
      </Row>
      <Row>
        <Column span={3}><Label lineHeight={1.5}></Label></Column>
        <Column span={9}><Paragraph font="cormorant" size={17}>Danse</Paragraph></Column>
      </Row>
      <Row>
        <Column span={3}><Label lineHeight={1.5}>22h00</Label></Column>
        <Column span={9}><Paragraph font="cormorant" size={17}>Feux d’artifices de la Ronde</Paragraph></Column>
      </Row>
      <Row>
        <Column span={3}><Label lineHeight={1.5}></Label></Column>
        <Column span={9}><Paragraph font="cormorant" size={17}>Danse</Paragraph></Column>
      </Row>
      <Row>
        <Column span={3}><Label lineHeight={1.5}>Minuit</Label></Column>
        <Column span={9}><Paragraph font="cormorant" size={17}>Buffet de fin de soirée</Paragraph></Column>
      </Row>
      <Row>
        <Column span={3}><Label lineHeight={1.5}>2h00</Label></Column>
        <Column span={9}><Paragraph font="cormorant" size={17}>Dernière navette fluviale</Paragraph></Column>
      </Row>
    </LayoutContent>
  </Layout>
);

export default Unfolding;
