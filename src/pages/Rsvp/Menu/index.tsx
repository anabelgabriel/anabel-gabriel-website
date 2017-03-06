import * as React from 'react';
import {
  Form, FormActions, FormProgress, FormProgressStep, Paragraph, View, Label, Row, Column, RadioGroup, Radio, Title
} from '../../../components';
import Attendee from "../../../stores/Attendee/index";

interface Props {
  attendee: Attendee;
  onBack: () => void;
  onSubmit: () => void;
}

interface State {
}

class Menu<P extends Props> extends React.Component<P, State> {
  public props: P;
  public state: State = {
  };

  public handleSubmit = () => {
  };

  public render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Paragraph font="edwardian" size={30}>
          Veuillez faire votre choix de menu.
        </Paragraph>
        {this.renderPerson({ firstName: 'Gabriel' })}
        <FormActions>
          <FormProgress onBack={this.props.onBack} disableNext={true}>
            <FormProgressStep/>
            <FormProgressStep/>
            <FormProgressStep selected/>
            <FormProgressStep/>
          </FormProgress>
        </FormActions>
      </Form>
    );
  }

  private renderPerson(person: { firstName: string }) {
    return (
      <View>
        <Title>{person.firstName}</Title>
            <Row marginBottom={16}>
              <Column span={4}>
                <Label>Bouchée cocktail</Label>
              </Column>
              <Column span={8}>
                <RadioGroup value={1} onChange={(value: any) => null}>
                  <Radio marginTop={0} label={'Tartare de saumon à la lime sur cône au sésame noir'} value={1}/>
                  <Radio label={'Fiochettis aux trois fromages à la provençale'} value={2}/>
                </RadioGroup>
              </Column>
            </Row>
            <Row marginBottom={16}>
              <Column span={4}>
                <Label>Entrée</Label>
              </Column>
              <Column span={8}>
                <Paragraph font="cormorant" size={17}>
                  Fondant de légumes et fromage de chèvre, jeunes pousses d’épinards
                </Paragraph>
              </Column>
            </Row>
            <Row marginBottom={16}>
              <Column span={4}>
                <Label>Plats<br/>principaux</Label>
              </Column>
              <Column span={8}>
                <RadioGroup value={1} onChange={(value: any) => null}>
                  <Radio marginTop={0} label={'Suprême de volaille au calvados et pommes caramélisées'} value={1}/>
                  <Radio label={'Portefeuille filet de boeuf forestier au vin de Madère'} value={2}/>
                  <Radio label={'Sauté de pâte Udon aux légumes et gingembre'} value={3}/>
                </RadioGroup>
              </Column>
            </Row>
            <Row marginBottom={16}>
              <Column span={4}>
                <Label>Entremet</Label>
              </Column>
              <Column span={8}>
                <Paragraph font="cormorant" size={17}>
                  Petite fantaisie au parmesan, vinaigrette tangerine
                </Paragraph>
              </Column>
            </Row>
            <Row marginBottom={16}>
              <Column span={4}>
                <Label>Dessert</Label>
              </Column>
              <Column span={8}>
                <Paragraph font="cormorant" size={17}>
                  Languette croustillante au chocolat
                </Paragraph>
              </Column>
            </Row>
      </View>
    );
  }
}

export default Menu;
