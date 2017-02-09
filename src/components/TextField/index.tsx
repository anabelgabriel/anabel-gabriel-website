import * as React from 'react';

export interface TextFieldProps {
}

class TextField extends React.Component<TextFieldProps, void> {
  public props: TextFieldProps;

  public render() {
    return (
      <div>
        Hello world
      </div>
    );
  }
}

export default TextField;
