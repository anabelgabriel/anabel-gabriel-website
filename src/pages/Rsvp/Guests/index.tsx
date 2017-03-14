import * as React from 'react';
import {
  Form, FormActions, FormProgress, FormProgressStep, Row, RadioGroup, Radio, View, Separator, NumberField, Column,
  TextField, Paragraph
} from '../../../components';
import Attendee from "../../../stores/Attendee/index";
import { inject, observer } from 'mobx-react';
import Invitations from "../../../stores/Invitations/index";
import Invitation from "../../../stores/Invitations/Invitation";

interface Props {
  attendee: Attendee;
  onBack: () => void;
  onSubmit: () => void;
}

interface State {
  hasGuests: boolean;
  guestsCount: number;
  invitation: Invitation;
}

@inject('invitations') @observer
class Guests<P extends Props & { invitations?: Invitations }> extends React.Component<P, State> {
  public props: P;
  public state: State = {
    hasGuests: null,
    guestsCount: 2,
    invitation: null
  };

  public componentWillMount() {
    const invitation = this.props.invitations.find(this.props.attendee);
    if (invitation) this.setState({ invitation });
  }

  componentWillUpdate(nextProps, nextState) {
    if (nextState.hasGuests) {
      if (this.props.attendee.guests.length > nextState.guestsCount - 1) {
        this.props.attendee.guests = this.props.attendee.guests.slice(0, nextState.guestsCount - 1);
      } else if (this.props.attendee.guests.length < nextState.guestsCount - 1) {
        for (let i = 0, len = (nextState.guestsCount - 1 - this.props.attendee.guests.length); i < len; ++i) {
          this.props.attendee.guests.push({
            firstName: '',
            lastName: '',
            menu: {
              bites: null,
              dinner: null,
              wine: null,
              hasAllergies: null,
              allergies: null,
            }
          });
        }
      }
    } else {
      this.props.attendee.guests = [];
    }
  }

  public handleSubmit = () => {
    this.props.onSubmit();
  };

  public render() {
    const { hasGuests } = this.state;
    const isValid = hasGuests === false ||
      (hasGuests && this.props.attendee.guests[0] && this.props.attendee.guests[0].firstName && this.props.attendee.guests[0].lastName);
    return (
      <Form onSubmit={this.handleSubmit}>
        <Paragraph font="edwardian" size={30}>
          Bonjour {this.props.attendee.firstName}, veuillez nous indiquer avec qui vous viendrais.
        </Paragraph>
        <Row>
          <RadioGroup value={hasGuests} onChange={(value: any) => this.setState({ hasGuests: value })}>
            <Radio label={'Je serai accompagné'} value={true}/>
            <Radio label={'Je ne serai pas accompagné'} value={false}/>
          </RadioGroup>
        </Row>
        {hasGuests ? this.renderPart2() : null}
        <FormActions>
          <FormProgress onBack={this.props.onBack} disableNext={!isValid}>
            <FormProgressStep/>
            <FormProgressStep selected/>
            <FormProgressStep/>
            <FormProgressStep/>
          </FormProgress>
        </FormActions>
      </Form>
    );
  }

  private renderPart2() {
    const { guestsCount, invitation } = this.state;
    if (invitation && invitation.hasChildren) {
      return (
        <View>
          <Separator/>
          <Row horizontalAlign="center">
            <NumberField
              label="Nous serons"
              maximum={6}
              minimum={2}
              value={guestsCount}
              onChange={(value) => this.setState({ guestsCount: value })}
            />
          </Row>
          {this.renderGuests()}
        </View>
      );
    } else {
      return (
        <View>
          <Separator/>
          {this.renderGuests()}
        </View>
      );
    }
  }

  private renderGuests() {
    return this.props.attendee.guests.map((guest, index) => {
      return (
        <Row key={index}>
          <Column span={6} mobileSpan={12}>
            <TextField
              type="name"
              label={'Prénom'}
              autoFill="first_name"
              value={guest.firstName}
              onChange={value => guest.firstName = value as any}
              valid={guest.firstName ? true : false}
            />
          </Column>
          <Column span={6} mobileSpan={12}>
            <TextField
              type="name"
              label={'Nom'}
              autoFill="last_name"
              value={guest.lastName}
              onChange={value => guest.lastName = value as any}
              valid={guest.lastName ? true : false}
            />
          </Column>
        </Row>
      );
    });
  }
}

export default Guests;
