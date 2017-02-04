import * as React from 'react';

export interface ComponentProps extends React.DOMAttributes<any> {
  className?:string;
}

const Component:React.SFC<any> = (props:ComponentProps):React.ReactElement<ComponentProps> => (
  <div>
  </div>
);

export default Component;
