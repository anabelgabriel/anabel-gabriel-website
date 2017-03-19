import * as React from 'react';
import { Paragraph, Layout, LayoutContent } from '../../components';
import { i18n } from '../../utils';

const Memos: React.SFC<void> = ({ lang }: any): React.ReactElement<void> => (
  <Layout>
    <LayoutContent>
      <Paragraph align="center">
        {lang.no_posts}
      </Paragraph>
    </LayoutContent>
  </Layout>
);

export default i18n({
  en: require( './lang/en.yaml'),
  fr: require( './lang/fr.yaml'),
  de: require( './lang/de.yaml'),
})(Memos);
