import * as React from 'react';
import { TextField, Column, Row, Radio, RadioGroup, Form, FormActions, FormProgress, FormProgressStep } from '../../../components';
import { i18n } from '../../../utils';
import Attendee from "../../../stores/Attendee/index";

interface AttendeeProps {
  lang?: any;
  attendee: Attendee;
};

class AttendeeComponent extends React.Component<AttendeeProps, void> {
  public props: AttendeeProps;

  public handleSubmit = () => {
    console.log(this.props.attendee);
  };

  public render() {
    const { lang } = this.props;

    return (
      <Form onSubmit={this.handleSubmit}>
        <Row>
          <Column span={6} mobileSpan={12}>
            <TextField type="name" label={lang.first_name} autoFill="first_name" value={this.props.attendee.firstName} onChange={value => this.props.attendee.firstName = value as string}/>
          </Column>
          <Column span={6} mobileSpan={12}>
            <TextField type="name" label={lang.last_name} autoFill="last_name" value={this.props.attendee.lastName} onChange={value => this.props.attendee.lastName = value as string}/>
          </Column>
        </Row>
        <Row>
          <Column span={12}>
            <TextField type="email" label={lang.email} autoFill="email" value={this.props.attendee.email} onChange={value => this.props.attendee.email = value as string}/>
          </Column>
        </Row>
        <Row>
          <RadioGroup onChange={value => console.log(value)}>
            <Radio label={lang.accept} value={true}/>
            <Radio label={lang.decline} value={false}/>
          </RadioGroup>
        </Row>
        <FormActions>
          <FormProgress nextDisabled={false}>
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

export default i18n({
  en: require( './lang/en.yaml'),
  fr: require( './lang/fr.yaml'),
})(AttendeeComponent);
