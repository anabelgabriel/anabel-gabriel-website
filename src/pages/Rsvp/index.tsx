import * as React from 'react';
import { Layout, LayoutContent } from '../../components';
import AttendeeComponent from './Attendee';
import Guests from './Guests';
import { observer, inject } from 'mobx-react';
import { Attendees } from "../../stores";
import Attendee from "../../stores/Attendee";
import Menu from "./Menu";
import Requests from "./Requests";
import Complete from "./Complete";

type Steps = 'attendee' | 'guests' | 'menu' | 'requests';

interface Props {
  attendees: Attendees;
}

interface State {
  step: Steps;
  complete: boolean;
  guest?: number;
}

class Rsvp<P extends void> extends React.Component<Props, State> {
  private attendee: Attendee;
  public state: State = {
    step: 'attendee',
    complete: false,
    guest: null
  };

  public componentWillMount() {
    const { attendees } = this.props;
    if (attendees.has('new')) {
      this.attendee = attendees.get('new');
    } else {
      this.attendee = new Attendee({});
      attendees.set('new', this.attendee);
    }
  }

  public handleSubmit = () => {
    switch (this.state.step) {
      case 'attendee':
        if (!this.attendee.isAttending) {
          window.scrollTo(0, 0);
          this.setState({ complete: true });
        } else {
          window.scrollTo(0, 0);
          this.setState({ step: 'guests' });
        }
        break;
      case 'guests':
        window.scrollTo(0, 0);
        this.setState({ step: 'menu' });
        break;
      case 'menu':
        const guestAmount = this.attendee.guests.length;
        window.scrollTo(0, 0);
        if (!guestAmount || this.state.guest !== null && this.state.guest + 1 === guestAmount) {
          this.setState({ step: 'requests' });
        } else {
          if (!this.state.guest) {
            this.setState({ step: 'menu', guest: 0 });
          } else {
            this.setState({ step: 'menu', guest: this.state.guest + 1 });
          }
        }
        break;
      case 'requests':
        this.onSubmit();
        break;
    }
  };

  public handleBack = () => {
    let guestAmount: number;
    switch (this.state.step) {
      case 'menu':
        guestAmount = this.attendee.guests.length;
        window.scrollTo(0, 0);
        console.log(guestAmount, this.state.guest);
        if (!guestAmount || this.state.guest === null) {
          this.setState({ step: 'guests' });
        } else {
          if (this.state.guest - 1 < 0) {
            this.setState({ step: 'menu', guest: null });
          } else {
            this.setState({ step: 'menu', guest: this.state.guest - 1 });
          }
        }
        break;
      case 'requests':
        guestAmount = this.attendee.guests.length;
        window.scrollTo(0, 0);
        if (!guestAmount) {
          this.setState({ step: 'guests', guest: null });
        } else {
          this.setState({ step: 'menu', guest: guestAmount - 1 });
        }
        break;
    }
  };

  public onSubmit = () => {
    this.attendee.save();
    //this.setState({ complete: true });
  };

  public render() {
    if (this.state.complete) {
      return <Complete attendee={this.attendee}/>;
    }

    let step: React.ReactElement<any>;
    if (!this.attendee.email) {
      this.attendee.email = 'gabriel.bull@me.com';
      this.attendee.firstName = 'Gabriel';
      this.attendee.lastName = 'Bull';
      this.attendee.isAttending = true;
    }

    switch (this.state.step) {
      case 'attendee':
        step = <AttendeeComponent attendee={this.attendee} onSubmit={this.handleSubmit}/>;
        break;
      case 'guests':
        step = <Guests attendee={this.attendee} onBack={() => this.setState({ step: 'attendee' })} onSubmit={this.handleSubmit}/>;
        break;
      case 'menu':
        step = <Menu
          attendee={this.attendee}
          guest={this.state.guest === null ? this.attendee : this.attendee.guests[this.state.guest]}
          guestNum={this.state.guest === null ? 1 : 2 + this.state.guest}
          onBack={this.handleBack}
          onSubmit={this.handleSubmit}
        />;
        break;
      case 'requests':
        step = <Requests attendee={this.attendee} onBack={this.handleBack} onSubmit={this.handleSubmit}/>;
        break;
    }

    return (
      <Layout>
        <LayoutContent>
          {step}
        </LayoutContent>
      </Layout>
    );
  }
}

export default inject('attendees')(observer(Rsvp));
