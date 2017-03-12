import * as React from 'react';
import { Layout, LayoutContent, Paragraph, View, Button, Row } from '../../../components';
import Attendee from "../../../stores/Attendee/index";

interface Props {
  attendee: Attendee;
}

class Complete extends React.Component<Props, void> {
  public props: Props;

  public render() {
    const { attendee } = this.props;
    return (
      <Layout>
        <LayoutContent>
          {attendee.isAttending ? (
            <View>
              <Paragraph font="edwardian" size={40} align="center">
                Nous avons très hâte de vous voir!
              </Paragraph>
              <Paragraph size={16} align="center">
                Pour plus d'information sur l'hébergement et pour nous mentioner si vous allez être présent, visitez
                la section hébergement.
              </Paragraph>
              <Row horizontalAlign="center">
                <Button to="/accommodation">Hébergement</Button>
              </Row>
            </View>
          ) : (
            <Paragraph font="edwardian" size={40} align="center">
              Nous sommes désolée de ne pas vous avoir parmis nous. Nous espérons vous revoir bientôt!
            </Paragraph>
          )}
        </LayoutContent>
      </Layout>
    );
  }
}

export default Complete;
