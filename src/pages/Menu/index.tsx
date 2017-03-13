import * as React from 'react';
import { Paragraph, Layout, LayoutContent, Column, Row, Label, Or, Ornament } from '../../components';

interface Props {
}

const Menu: React.SFC<Props> = (props: Props): React.ReactElement<Props> => (
  <Layout>
    <LayoutContent>
      <Row marginBottom={16}>
        <Column span={4}>
          <Label lineHeight={1.5}>Bouchée cocktail</Label>
        </Column>
        <Column span={8}>
          <Paragraph font="cormorant" size={17}>
            Tartare de saumon à la lime sur cône au sésame noir
          </Paragraph>
          <Or>ou</Or>
          <Paragraph font="cormorant" size={17}>
            Fiochettis aux trois fromages à la provençale
          </Paragraph>
        </Column>
      </Row>
      <Row marginBottom={16}>
        <Column span={4}>
        </Column>
        <Column span={8}>
          <Ornament/>
        </Column>
      </Row>
      <Row marginBottom={16}>
        <Column span={4}>
          <Label lineHeight={1.5}>Entrée</Label>
        </Column>
        <Column span={8}>
          <Paragraph font="cormorant" size={17}>
            Fondant de légumes et fromage de chèvre, jeunes pousses d’épinards
          </Paragraph>
        </Column>
      </Row>
      <Row marginBottom={16}>
        <Column span={4}>
        </Column>
        <Column span={8}>
          <Ornament/>
        </Column>
      </Row>
      <Row marginBottom={16}>
        <Column span={4}>
          <Label lineHeight={1.5}>Plats principaux</Label>
        </Column>
        <Column span={8}>
          <Paragraph font="cormorant" size={17}>
            Suprême de volaille au calvados et pommes caramélisées
          </Paragraph>
          <Or>ou</Or>
          <Paragraph font="cormorant" size={17}>
            Portefeuille filet de boeuf forestier au vin de Madère
          </Paragraph>
          <Or>ou</Or>
          <Paragraph font="cormorant" size={17}>
            Sauté de pâte Udon aux légumes et gingembre
          </Paragraph>
        </Column>
      </Row>
      <Row marginBottom={16}>
        <Column span={4}>
        </Column>
        <Column span={8}>
          <Ornament/>
        </Column>
      </Row>
      <Row marginBottom={16}>
        <Column span={4}>
          <Label lineHeight={1.5}>Entremet</Label>
        </Column>
        <Column span={8}>
          <Paragraph font="cormorant" size={17}>
            Petite fantaisie au parmesan, vinaigrette tangerine
          </Paragraph>
        </Column>
      </Row>
      <Row marginBottom={16}>
        <Column span={4}>
        </Column>
        <Column span={8}>
          <Ornament/>
        </Column>
      </Row>
      <Row marginBottom={16}>
        <Column span={4}>
          <Label lineHeight={1.5}>Dessert</Label>
        </Column>
        <Column span={8}>
          <Paragraph font="cormorant" size={17}>
            Languette croustillante au chocolat
          </Paragraph>
        </Column>
      </Row>
    </LayoutContent>
  </Layout>
);

export default Menu;
