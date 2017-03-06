import * as React from 'react';
import { Layout, LayoutContent, Paragraph } from '../../../components';
import Attendee from "../../../stores/Attendee/index";

interface Props {
  attendee: Attendee;
}

class Complete extends React.Component<Props, void> {
  public props: Props;

  public render() {
    return (
      <Layout>
        <LayoutContent>
          <Paragraph font="edwardian" size={40} align="center">
            Nous sommes désolée de ne pas vous avoir parmis nous. Nous espérons vous revoir bientôt!
          </Paragraph>
        </LayoutContent>
      </Layout>
    );
  }
}

export default Complete;
