import * as React from 'react';
import { Paragraph, Layout, LayoutContent, Column, Row, Label, Title, View } from '../../components';
import { i18n } from '../../utils';

@i18n({
  en: require( './lang/en.yaml'),
  fr: require( './lang/fr.yaml'),
  de: require( './lang/de.yaml'),
})
class Unfolding extends React.Component<{lang: any}, void> {
  public render() {
    const { lang } = this.props;
    return (
      <Layout>
        <LayoutContent>
          <Title align="center">{lang.title}</Title>
          <Paragraph>
            {lang.p1}
          </Paragraph>
          <Paragraph>
            {lang.p2}
          </Paragraph>
          <Paragraph>
            {lang.p3}
          </Paragraph>
          {this.renderUnfolding(lang.unfolding)}
        </LayoutContent>
      </Layout>
    );
  }

  public renderUnfolding(items) {
    let children = [];
    for(let key in items) {
      if (items.hasOwnProperty(key)) {
        children.push(<View key={key}>{items[key].map((item, index) => (
          <Row key={index}>
            <Column span={3}><Label lineHeight={1.5}>{index === 0 ? key : null}</Label></Column>
            <Column span={9}><Paragraph font="cormorant" size={17}>{item}</Paragraph></Column>
          </Row>
        ))}</View>);
      }
    }
    return children;
  }
}

export default Unfolding;
