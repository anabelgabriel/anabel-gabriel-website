import * as React from 'react';
import { Layout, LayoutContent, TextField, Column, Row } from '../../components';
import { i18n } from '../../utils';

type RsvpProps = {
  lang: any;
};

const Rsvp: React.SFC<RsvpProps> = ({ lang }: RsvpProps): React.ReactElement<RsvpProps> => {
  return (
    <Layout>
      <LayoutContent>
        <Row>
          <Column span={6}>
            <TextField label={lang.first_name}/>
          </Column>
          <Column span={6}>
            <TextField label={lang.last_name}/>
          </Column>
        </Row>
      </LayoutContent>
    </Layout>
  );
}

export default i18n({
  en: require( './lang/en.yaml'),
  fr: require( './lang/fr.yaml'),
})(Rsvp);
