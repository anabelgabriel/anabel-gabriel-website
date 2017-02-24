import * as React from 'react';
import { inject, observer } from 'mobx-react';
import Attendee from "../../stores/Attendee";

export interface ComponentProps {
  attendees?: Array<Attendee>;
}

const Component:React.SFC<any> = ({ attendees }: ComponentProps):React.ReactElement<ComponentProps> => {
  return (
    <div>
    </div>
  );
}

export default inject('attendees')(observer(Component));
