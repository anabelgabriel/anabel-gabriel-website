import * as React from 'react';
import { TextField, Column, Row, Radio, RadioGroup, Form, FormActions, FormProgress, FormProgressStep } from '../../../components';
import { i18n } from '../../../utils';
import Attendee from "../../../stores/Attendee/index";
import { observer } from 'mobx-react';

interface AttendeeProps {
  lang?: any;
  attendee: Attendee;
  onSubmit: () => void;
};

@observer
class AttendeeComponent<P extends AttendeeProps> extends React.Component<AttendeeProps, void> {
  public props: AttendeeProps;

  public handleSubmit = () => {
    if (this.props.attendee.isValid()) {
      this.props.onSubmit();
    }
  };

  public render() {
    const { lang, attendee } = this.props;
    const validation = attendee.validate();
    return (
      <Form onSubmit={this.handleSubmit}>
        <Row>
          <Column span={6} mobileSpan={12}>
            <TextField
              type="name"
              label={lang.first_name}
              autoFill="first_name"
              value={attendee.firstName}
              onChange={value => attendee.firstName = value as string}
              valid={validation.get('firstName') === true}
            />
          </Column>
          <Column span={6} mobileSpan={12}>
            <TextField
              type="name"
              label={lang.last_name}
              autoFill="last_name"
              value={attendee.lastName}
              onChange={value => attendee.lastName = value as string}
              valid={validation.get('lastName') === true}
            />
          </Column>
        </Row>
        <Row>
          <Column span={12}>
            <TextField
              type="email"
              label={lang.email}
              autoFill="email"
              value={attendee.email}
              onChange={value => attendee.email = value as string}
              valid={validation.get('email') === true}
            />
          </Column>
        </Row>
        <Row>
          <RadioGroup value={attendee.isAttending} onChange={value => attendee.isAttending = value as boolean}>
            <Radio label={lang.accept} value={true}/>
            <Radio label={lang.decline} value={false}/>
          </RadioGroup>
        </Row>
        <FormActions>
          <FormProgress nextDisabled={!attendee.isValid()}>
            <FormProgressStep selected/>
            <FormProgressStep/>
            <FormProgressStep/>
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
