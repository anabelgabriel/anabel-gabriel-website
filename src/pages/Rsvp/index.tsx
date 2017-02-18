import * as React from 'react';
import { Layout, LayoutContent, TextField, Column, Row, Radio, RadioGroup, FormActions, FormProgress, FormProgressStep } from '../../components';
import { i18n } from '../../utils';

type RsvpProps = {
  lang: any;
};

const Rsvp: React.SFC<RsvpProps> = ({ lang }: RsvpProps): React.ReactElement<RsvpProps> => {
  return (
    <Layout>
      <LayoutContent>
        <Row>
          <Column span={12}>
            <TextField type="email" label={lang.email} autoFill="email"/>
          </Column>
        </Row>
        <Row>
          <Column span={6} mobileSpan={12}>
            <TextField type="name" label={lang.first_name} autoFill="first_name"/>
          </Column>
          <Column span={6} mobileSpan={12}>
            <TextField type="name" label={lang.last_name} autoFill="last_name"/>
          </Column>
        </Row>
        <Row>
          <RadioGroup>
            <Radio label={lang.accept}/>
            <Radio label={lang.decline}/>
          </RadioGroup>
        </Row>
        
        <FormActions>
          <FormProgress>
            <FormProgressStep/>
          </FormProgress>
        </FormActions>
      </LayoutContent>
    </Layout>
  );
}

export default i18n({
  en: require( './lang/en.yaml'),
  fr: require( './lang/fr.yaml'),
})(Rsvp);
