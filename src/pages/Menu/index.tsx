import * as React from 'react';
import { Paragraph, Layout, LayoutContent, Column, Row, Label, Or, Ornament } from '../../components';
import { i18n } from '../../utils';

const Menu: React.SFC<void> = ({ lang }: any): React.ReactElement<void> => (
  <Layout>
    <LayoutContent>
      <Paragraph font="edwardian" size={30} align="center">
        {lang.info}
      </Paragraph>
      <Row marginBottom={16}>
        <Column span={4}>
          <Label lineHeight={1.5}>{lang.bites_title}</Label>
        </Column>
        <Column span={8} layout="vertical">
          <Paragraph font="cormorant" size={17}>
            {lang.bites[0]}
          </Paragraph>
          <Or>{lang.or}</Or>
          <Paragraph font="cormorant" size={17}>
            {lang.bites[1]}
          </Paragraph>
        </Column>
      </Row>
      <Row marginBottom={16}>
        <Column span={4}>
        </Column>
        <Column span={8}>
          <Ornament/>
        </Column>
      </Row>
      <Row marginBottom={16}>
        <Column span={4}>
          <Label lineHeight={1.5}>{lang.starter_title}</Label>
        </Column>
        <Column span={8}>
          <Paragraph font="cormorant" size={17}>
            {lang.starter[0]}
          </Paragraph>
        </Column>
      </Row>
      <Row marginBottom={16}>
        <Column span={4}>
        </Column>
        <Column span={8}>
          <Ornament/>
        </Column>
      </Row>
      <Row marginBottom={16}>
        <Column span={4}>
          <Label lineHeight={1.5}>{lang.dinner_title}</Label>
        </Column>
        <Column span={8} layout="vertical">
          <Paragraph font="cormorant" size={17}>
            {lang.dinner[0]}
          </Paragraph>
          <Or>{lang.or}</Or>
          <Paragraph font="cormorant" size={17}>
            {lang.dinner[1]}
          </Paragraph>
          <Or>{lang.or}</Or>
          <Paragraph font="cormorant" size={17}>
            {lang.dinner[2]}
          </Paragraph>
        </Column>
      </Row>
      <Row marginBottom={16}>
        <Column span={4}>
        </Column>
        <Column span={8}>
          <Ornament/>
        </Column>
      </Row>
      <Row marginBottom={16}>
        <Column span={4}>
          <Label lineHeight={1.5}>{lang.in_between_title}</Label>
        </Column>
        <Column span={8}>
          <Paragraph font="cormorant" size={17}>
            {lang.in_between[0]}
          </Paragraph>
        </Column>
      </Row>
      <Row marginBottom={16}>
        <Column span={4}>
        </Column>
        <Column span={8}>
          <Ornament/>
        </Column>
      </Row>
      <Row marginBottom={16}>
        <Column span={4}>
          <Label lineHeight={1.5}>{lang.dessert_title}</Label>
        </Column>
        <Column span={8}>
          <Paragraph font="cormorant" size={17}>
            {lang.dessert[0]}
          </Paragraph>
        </Column>
      </Row>
    </LayoutContent>
  </Layout>
);

export default i18n({
  en: require( './lang/en.yaml'),
  fr: require( './lang/fr.yaml'),
  de: require( './lang/de.yaml'),
})(Menu);
