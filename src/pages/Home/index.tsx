import * as React from 'react';
import { inject, observer } from 'mobx-react';
import Attendees from "../../stores/Attendees/index";
import Attendee from "../../stores/Attendees/Attendee";

export interface ComponentProps {
  attendees?: Attendees;
}

const Component:React.SFC<any> = ({ attendees }: ComponentProps):React.ReactElement<ComponentProps> => {
  return (
    <div>
      <h1 style={{ color: 'white', margin: '40px auto', textAlign: 'center' }}>Number of attendees: {attendees.size}</h1>
      <button onClick={attendees.add}>
        Add attendees
      </button>
      {Array.from(attendees.values()).map((attendee, index) => <div key={index}>{attendee.name}</div>)}
    </div>
  );
}

export default inject('attendees')(observer(Component));
