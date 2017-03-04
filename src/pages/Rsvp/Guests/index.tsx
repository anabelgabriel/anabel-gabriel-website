import * as React from 'react';
import { Form, FormActions, FormProgress, FormProgressStep, Row, RadioGroup, Radio } from '../../../components';
import Attendee from "../../../stores/Attendee/index";
import { inject, observer } from 'mobx-react';
import Invitations from "../../../stores/Invitations/index";

interface Props {
  attendee: Attendee;
}

@inject('invitations') @observer
class Guests<P extends  Props & { invitations?: Invitations }> extends React.Component<P, void> {
  public handleSubmit = () => {
  };

  public render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Row>
          <RadioGroup value={true} onChange={value => null}>
            <Radio label={'Je serai accompagné'} value={true}/>
            <Radio label={'Je ne serai pas accompagné'} value={false}/>
          </RadioGroup>
        </Row>
        <FormActions>
          <FormProgress>
            <FormProgressStep/>
            <FormProgressStep selected/>
            <FormProgressStep/>
            <FormProgressStep/>
          </FormProgress>
        </FormActions>
      </Form>
    );
  }
}

export default Guests;
