import * as React from 'react';
import { Layout, LayoutContent, Paragraph, View, Button, Row } from '../../../components';
import Attendee from "../../../stores/Attendee/index";
import { i18n } from '../../../utils';

interface Props {
  lang?: any;
  attendee: Attendee;
}

class Complete extends React.Component<Props, void> {
  public props: Props;

  public render() {
    const { attendee, lang } = this.props;
    return (
      <Layout>
        <LayoutContent>
          {attendee.isAttending ? (
            <View>
              <Paragraph font="edwardian" size={40} align="center">
                {lang.success}
              </Paragraph>
              <Paragraph size={16} align="center">
                {lang.accommodation_info}
              </Paragraph>
              <Row horizontalAlign="center">
                <Button to="/accommodation">{lang.accommodation}</Button>
              </Row>
            </View>
          ) : (
            <Paragraph font="edwardian" size={40} align="center">
              {lang.sorry}
            </Paragraph>
          )}
        </LayoutContent>
      </Layout>
    );
  }
}

export default i18n({
  en: require( './lang/en.yaml'),
  fr: require( './lang/fr.yaml'),
})(Complete);
