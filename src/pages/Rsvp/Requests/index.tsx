import * as React from 'react';
import { Form, FormActions, FormProgress, FormProgressStep, Paragraph, TextArea } from '../../../components';
import Attendee from "../../../stores/Attendee/index";
import { observer } from 'mobx-react';

interface Props {
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
    const { attendee, onBack } = this.props;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Paragraph font="edwardian" size={30}>
          Dites-nous quelle chanson il vous ferait plaisir d'entendre le soir de notre mariage.
        </Paragraph>
        <TextArea
          label="Demandes spéciale musicale"
          value={attendee.specialRequests}
          onChange={(value) => attendee.specialRequests = value }
        />
        <TextArea
          label="Autres demandes ou notes"
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

export default Requests;
