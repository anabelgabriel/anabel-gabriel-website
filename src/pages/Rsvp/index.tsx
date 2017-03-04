import * as React from 'react';
import { Layout, LayoutContent } from '../../components';
import AttendeeComponent from './Attendee';
import Guests from './Guests';
import { observer, inject } from 'mobx-react';
import { Attendees } from "../../stores";
import Attendee from "../../stores/Attendee";

type Steps = 'attendee' | 'guests';

interface Props {
  attendees: Attendees;
}

interface State {
  step: Steps;
}

class Rsvp<P extends void> extends React.Component<Props, State> {
  private attendee: Attendee;
  public state: State = {
    step: 'attendee'
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
        this.setState({ step: 'guests' });
        break;
    }
  };

  public render() {
    let step: React.ReactElement<any>;
    switch (this.state.step) {
      case 'attendee':
//        step = <AttendeeComponent attendee={this.attendee} onSubmit={this.handleSubmit}/>;
        step = <Guests attendee={this.attendee}/>;
        break;
      case 'guests':
        step = <Guests attendee={this.attendee}/>;
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
