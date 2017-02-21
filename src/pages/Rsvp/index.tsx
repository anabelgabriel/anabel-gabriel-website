import * as React from 'react';
import { Layout, LayoutContent } from '../../components';
import AttendeeComponent from './Attendee';
import { observer, inject } from 'mobx-react';
import { Attendees } from "../../stores";
import Attendee from "../../stores/Attendee";

interface Props {
  attendees: Attendees;
}

class Rsvp extends React.PureComponent<Props, void> {
  private attendee: Attendee;

  public componentWillMount() {
    const { attendees } = this.props;
    if (attendees.has('new')) {
      this.attendee = attendees.get('new');
    } else {
      this.attendee = new Attendee({});
      attendees.set('new', this.attendee);
    }
  }

  public render() {
    return (
      <Layout>
        <LayoutContent>
          <AttendeeComponent attendee={this.attendee}/>
        </LayoutContent>
      </Layout>
    );
  }
}

export default inject('attendees')(observer(Rsvp));
