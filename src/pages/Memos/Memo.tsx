import * as React from 'react';
import Entry from "../../stores/Blog/index";
import { View, Title, Paragraph, Ornament } from '../../components';
import Photos from './Photos';

interface Props {
  entry: Entry;
}

const Memo: React.SFC<Props> = ({ entry }: Props): React.ReactElement<Props> => {
  return (
    <View>
      <Title marginBottom={10} align="center">{entry.title}</Title>
      <Paragraph align="center">
        <span dangerouslySetInnerHTML={{ __html: entry.content.replace(/\n/g, '<br/><br/>') }}/>
      </Paragraph>
      {entry.photos ? <Photos photos={entry.photos.slice()}/> : null}
      <Ornament/>
    </View>
  );
}

export default Memo;
