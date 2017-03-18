import * as React from 'react';
import {
  Form, FormActions, FormProgress, FormProgressStep, Paragraph, View, Label, Row, Column, RadioGroup, Radio, Title,
  CheckBox, TextArea
} from '../../../components';
import { default as Attendee } from "../../../stores/Attendee/index";
import { default as Guest } from "../../../stores/Attendee/Guest";
import { observer } from 'mobx-react';
import { i18n } from '../../../utils';

interface Props {
  lang?: any;
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
    if (this.isValid()) {
      this.props.onSubmit();
    }
  };

  public isValid = (): boolean => {
    const { guest } = this.props;
    let valid: boolean = false;
    if (guest.isChildren) {
      valid = guest.menu.dinner ? true : false;
    } else {
      valid = (guest.menu.bites && guest.menu.dinner && guest.menu.wine) ? true : false;
    }
    return valid;
  };

  public render() {
    const { lang } = this.props;
    let valid: boolean = this.isValid();
    return (
      <Form onSubmit={this.handleSubmit}>
        <Paragraph font="edwardian" size={30}>
          {lang.intro}
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
    const { lang } = this.props;
    return (
      <View>
        <Title>{guest.firstName}</Title>
        {!guest.isChildren ? (
          <Row marginBottom={16}>
            <Column span={4}>
              <Label>{lang.bites_title}</Label>
            </Column>
            <Column span={8}>
              <RadioGroup
                value={guest.menu.bites}
                onChange={(value: any) => guest.menu.bites = value}
              >
                <Radio
                  marginTop={0}
                  label={lang.bites[0]}
                  value={'salmon'}
                />
                <Radio
                  label={lang.bites[1]}
                  value={'cheese'}
                />
              </RadioGroup>
            </Column>
          </Row>
        ) : null}
        {!guest.isChildren ? (
          <Row marginBottom={16}>
            <Column span={4}>
              <Label>{lang.starter_title}</Label>
            </Column>
            <Column span={8}>
              <Paragraph font="cormorant" size={17}>
                {lang.starter[0]}
              </Paragraph>
            </Column>
          </Row>
        ) : null}
        <Row marginBottom={16}>
          <Column span={4}>
            <Label>{lang.dinner_title}</Label>
          </Column>
          <Column span={8}>
            <RadioGroup
              value={guest.menu.dinner}
              onChange={(value: any) => guest.menu.dinner = value }
            >
              <Radio
                marginTop={0}
                label={lang.dinner[0]}
                value={'chicken'}
              />
              <Radio
                label={lang.dinner[1]}
                value={'beef'}
              />
              <Radio
                label={lang.dinner[2]}
                value={'veggies'}
              />
            </RadioGroup>
          </Column>
        </Row>
        {!guest.isChildren ? (
          <Row marginBottom={16}>
            <Column span={4}>
              <Label>{lang.in_between_title}</Label>
            </Column>
            <Column span={8}>
              <Paragraph font="cormorant" size={17}>
                {lang.in_between[0]}
              </Paragraph>
            </Column>
          </Row>
        ) : null}
        <Row marginBottom={16}>
          <Column span={4}>
            <Label>{lang.dessert_title}</Label>
          </Column>
          <Column span={8}>
            <Paragraph font="cormorant" size={17}>
              {lang.dessert[0]}
            </Paragraph>
          </Column>
        </Row>

        {!guest.isChildren ? (
          <View>
            <Row marginBottom={16}>
              <Label>{lang.wine_info}</Label>
            </Row>
            <Row marginBottom={16}>
              <Column span={4}>
                <Label>{lang.wine_title}</Label>
              </Column>
              <Column span={8}>
                <RadioGroup
                  value={guest.menu.wine}
                  onChange={(value: any) => guest.menu.wine = value }
                >
                  <Radio
                    marginTop={0}
                    label={lang.wine[0]}
                    value={'white'}
                  />
                  <Radio
                    label={lang.wine[1]}
                    value={'red'}
                  />
                </RadioGroup>
              </Column>
            </Row>
          </View>
        ) : null}
        <Row marginBottom={16} layout="vertical">
          <CheckBox
            label={lang.allergies_title}
            onChange={(value: any) => guest.menu.hasAllergies = value }
            selected={guest.menu.hasAllergies}
          />
          {guest.menu.hasAllergies ? (
              <TextArea
                label={lang.allergies_details}
                value={guest.menu.allergies}
                onChange={(value) => guest.menu.allergies = value }
              />
            ) : null}
        </Row>
      </View>
    );
  }
}

export default i18n({
  en: require( './lang/en.yaml'),
  fr: require( './lang/fr.yaml'),
})(Menu);
