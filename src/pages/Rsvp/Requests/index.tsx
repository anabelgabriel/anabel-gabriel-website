import * as React from 'react';
import { Form, FormActions, FormProgress, FormProgressStep, Paragraph, TextArea } from '../../../components';
import Attendee from "../../../stores/Attendee/index";
import { observer } from 'mobx-react';
import { i18n } from '../../../utils';

interface Props {
  lang?: any;
  attendee: Attendee;
  onSubmit: () => void;
  onBack: () => void;
};

@observer
class Requests<P extends Props> extends React.Component<Props, void> {
  public props: Props;

  public handleSubmit = () => {
    this.props.onSubmit();
  };

  public render() {
    const { lang, attendee, onBack } = this.props;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Paragraph font="edwardian" size={30}>
          {lang.intro}
        </Paragraph>
        <TextArea
          label={lang.music}
          value={attendee.specialRequests}
          onChange={(value) => attendee.specialRequests = value }
        />
        <TextArea
          label={lang.other}
          value={attendee.notes}
          onChange={(value) => attendee.notes = value }
        />
        <FormActions>
          <FormProgress onBack={onBack}>
            <FormProgressStep/>
            <FormProgressStep/>
            <FormProgressStep/>
            {this.props.attendee.guests.map((guest, index) => (
              <FormProgressStep key={index}/>
            ))}
            <FormProgressStep selected/>
          </FormProgress>
        </FormActions>
      </Form>
    );
  }
}

export default i18n({
  en: require( './lang/en.yaml'),
  fr: require( './lang/fr.yaml'),
})(Requests);
