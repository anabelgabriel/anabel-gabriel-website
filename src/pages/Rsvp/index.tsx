import * as React from 'react';
import { Layout, LayoutContent, TextField } from '../../components';

const Rsvp: React.SFC<void> = (): React.ReactElement<void> => {
  return (
    <Layout>
      <LayoutContent>
        <TextField/>
      </LayoutContent>
    </Layout>
  );
}

export default Rsvp;
