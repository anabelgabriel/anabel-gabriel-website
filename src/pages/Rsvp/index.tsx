import * as React from 'react';
import { Layout, LayoutContent } from '../../components';
import AttendeeComponent from './Attendee';
import Guests from './Guests';
import { observer, inject } from 'mobx-react';
import { Attendees } from "../../stores";
import Attendee from "../../stores/Attendee";
import Menu from "./Menu";
import Complete from "./Complete";

type Steps = 'attendee' | 'guests' | 'menu';

interface Props {
  attendees: Attendees;
}

interface State {
  step: Steps;
  complete: boolean;
}

class Rsvp<P extends void> extends React.Component<Props, State> {
  private attendee: Attendee;
  public state: State = {
    step: 'attendee',
    complete: false
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
    }
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
        step = <Menu attendee={this.attendee} onBack={() => this.setState({ step: 'guests' })} onSubmit={this.handleSubmit}/>;
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
