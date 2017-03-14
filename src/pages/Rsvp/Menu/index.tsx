import * as React from 'react';
import {
  Form, FormActions, FormProgress, FormProgressStep, Paragraph, View, Label, Row, Column, RadioGroup, Radio, Title,
  CheckBox, TextArea
} from '../../../components';
import { default as Attendee } from "../../../stores/Attendee/index";
import { default as Guest } from "../../../stores/Attendee/Guest";
import { observer } from 'mobx-react';

interface Props {
  attendee: Attendee;
  guest: Guest;
  guestNum: number;
  onBack: () => void;
  onSubmit: () => void;
}

interface State {
  bites: 'salmon' | 'cheese';
  dinner: 'chicken' | 'beef' | 'veggies';
  wine: 'white' | 'red';
  hasAllergies: boolean;
  allergies: string;
}

@observer
class Menu<P extends Props> extends React.Component<P, State> {
  public props: P;
  public state: State = {
    bites: null,
    dinner: null,
    wine: null,
    hasAllergies: null,
    allergies: null
  };

  public handleSubmit = () => {
    if (this.props.guest.menu.bites && this.props.guest.menu.dinner && this.props.guest.menu.wine) {
      this.props.onSubmit();
    }
  };

  public render() {
    const valid = this.props.guest.menu.bites && this.props.guest.menu.dinner && this.props.guest.menu.wine;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Paragraph font="edwardian" size={30}>
          Veuillez faire votre choix de menu.
        </Paragraph>
        {this.renderGuest(this.props.guest)}
        <FormActions>
          <FormProgress onBack={this.props.onBack} disableNext={!valid}>
            <FormProgressStep/>
            <FormProgressStep/>
            <FormProgressStep selected={this.props.guestNum === 1}/>
            {this.props.attendee.guests.map((guest, index) => (
              <FormProgressStep key={index} selected={this.props.guestNum === index + 2}/>
            ))}
            <FormProgressStep/>
          </FormProgress>
        </FormActions>
      </Form>
    );
  }

  private renderGuest(guest: Guest) {
    return (
      <View>
        <Title>{guest.firstName}</Title>
        <Row marginBottom={16}>
          <Column span={4}>
            <Label>Bouchée cocktail</Label>
          </Column>
          <Column span={8}>
            <RadioGroup
              value={guest.menu.bites}
              onChange={(value: any) => guest.menu.bites = value}
            >
              <Radio
                marginTop={0}
                label={'Tartare de saumon à la lime sur cône au sésame noir'}
                value={'salmon'}
              />
              <Radio
                label={'Fiochettis aux trois fromages à la provençale'}
                value={'cheese'}
              />
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
            <RadioGroup
              value={guest.menu.dinner}
              onChange={(value: any) => guest.menu.dinner = value }
            >
              <Radio
                marginTop={0}
                label={'Suprême de volaille au calvados et pommes caramélisées'}
                value={'chicken'}
              />
              <Radio
                label={'Portefeuille filet de boeuf forestier au vin de Madère'}
                value={'beef'}
              />
              <Radio
                label={'Sauté de pâte Udon aux légumes et gingembre'}
                value={'veggies'}
              />
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

        <Row marginBottom={16}>
          <Column span={4}>
            <Label>Vin</Label>
          </Column>
          <Column span={8}>
            <RadioGroup
              value={guest.menu.wine}
              onChange={(value: any) => guest.menu.wine = value }
            >
              <Radio
                marginTop={0}
                label={'Blanc'}
                value={'white'}
              />
              <Radio
                label={'Rouge'}
                value={'red'}
              />
            </RadioGroup>
          </Column>
        </Row>
        <Row marginBottom={16} layout="vertical">
          <CheckBox
            label="J'ai des allergies"
            onChange={(value: any) => guest.menu.hasAllergies = value }
            selected={guest.menu.hasAllergies}
          />
          {guest.menu.hasAllergies ? (
              <TextArea
                label="Quelles sont vos allergies?"
                value={guest.menu.allergies}
                onChange={(value) => guest.menu.allergies = value }
              />
            ) : null}
        </Row>
      </View>
    );
  }
}

export default Menu;
