import * as React from 'react';
import {
  Form, FormActions, FormProgress, FormProgressStep, Paragraph
} from '../../../components';
import Attendee from "../../../stores/Attendee/index";

interface Props {
  attendee: Attendee;
  onBack: () => void;
  onSubmit: () => void;
}

interface State {
}

class Menu<P extends Props> extends React.Component<P, State> {
  public props: P;
  public state: State = {
  };

  public handleSubmit = () => {
  };

  public render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Paragraph font="edwardian" size={30}>
          Bonjour {this.props.attendee.firstName}, veuillez nous indiquer avec qui vous viendrais.
        </Paragraph>
        <FormActions>
          <FormProgress onBack={this.props.onBack} disableNext={true}>
            <FormProgressStep/>
            <FormProgressStep/>
            <FormProgressStep selected/>
            <FormProgressStep/>
          </FormProgress>
        </FormActions>
      </Form>
    );
  }
}

export default Menu;
