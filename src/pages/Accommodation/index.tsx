import * as React from 'react';
import '../../styles/pages/accommodation/index.scss';
import {
  Layout, LayoutContent, Paragraph, Image, Ornament, Button, Row, CheckBox, Separator, TextField, NumberField, Label,
  Form, View
} from '../../components';
import { create } from '../../stores/Accomodation';
import { i18n } from '../../utils';

const namespace = (): string => 'accommodation';

interface Props {
  lang?: any;
}

interface State {
  attendDiner: boolean;
  attendBrunch: boolean;
  attendeesCount: number;
  bookHotel: boolean;
  name: string;
  success: boolean;
  error: boolean;
  loading: boolean;
}

class Accommodation extends React.Component<Props, State> {
  public state: State = {
    attendDiner: false,
    attendBrunch: false,
    attendeesCount: 1,
    bookHotel: false,
    name: '',
    success: null,
    error: null,
    loading: false
  };

  public componentWillMount() {
    if (localStorage && localStorage['ag__accommodation__sucess'] === 'true') {
      this.setState({ success: true });
    }
  }

  public handleSubmit = () => {
    if (!this.state.loading && (this.state.attendBrunch || this.state.attendDiner || this.state.bookHotel)) {
      this.setState({ loading: true });
      create({
        attendDiner: this.state.attendDiner,
        attendBrunch: this.state.attendBrunch,
        attendeesCount: this.state.attendeesCount,
        bookHotel: this.state.bookHotel,
        name: this.state.name
      })
        .then(() => {
          if (localStorage) localStorage['ag__accommodation__sucess'] = 'true';
          this.setState({ success: true, loading: false });
        })
        .catch(() => this.setState({ error: true, loading: false }))
    }
  };

  public render() {
    const { lang } = this.props;
    const { success, error } = this.state;

    return (
      <Layout className={namespace()}>
        <View className={`${namespace()}--photo`} marginBottom={20}>
          <Image src={require('../../images/accommodation/hotel.jpg')} className={`${namespace()}--photo--image`}/>
        </View>
        <LayoutContent>
          <Paragraph>
            {lang.p1}
          </Paragraph>
          <Paragraph>
            {lang.p2}
          </Paragraph>
          <Row horizontalAlign="center">
            <Button to="http://www.hotelmortagne.com/">{lang.book}</Button>
          </Row>
          <Ornament/>
        </LayoutContent>
        <View className={`${namespace()}--photo`} marginBottom={20}>
          <Image src={require('../../images/accommodation/sens.jpg')} className={`${namespace()}--photo--image`}/>
        </View>
        <LayoutContent>
          <Paragraph>
            {lang.p3}
          </Paragraph>
          <Paragraph>
            {lang.p4}
          </Paragraph>
          <Ornament/>
          {success ? (
              <Paragraph size={30} font="edwardian" align="center">{lang.success}</Paragraph>
            ) : null}
          {error ? (
              <Paragraph align="center" color="red">{"Une erreure c'est produite 😟"}</Paragraph>
            ) : null}
          {!success ? this.renderForm() : null}
        </LayoutContent>
      </Layout>
    );
  }

  private renderForm() {
    const { lang } = this.props;
    const { attendDiner, attendBrunch, attendeesCount, bookHotel, name, loading } = this.state;
    const submitEnabled = ((attendBrunch || attendDiner || bookHotel) && name) ? true : false;
    return (
      <Form onSubmit={this.handleSubmit}>
        <CheckBox
          label={lang.booked_room}
          onChange={(value) => this.setState({ bookHotel: value })}
          selected={bookHotel}
        />
        <Separator/>
        <Label>
          {lang.will_be_attending}
        </Label>
        <CheckBox
          label={lang.dinner}
          onChange={(value) => this.setState({ attendDiner: value })}
          selected={attendDiner}
        />
        <CheckBox
          label={lang.brunch}
          onChange={(value) => this.setState({ attendBrunch: value })}
          selected={attendBrunch}
        />
        <Separator/>
        <TextField
          label={lang.name}
          value={name}
          autoFill="full_name"
          onChange={(value: any) => this.setState({ name: value })}
        />
        <Row horizontalAlign="center">
          <NumberField
            label={lang.num}
            maximum={6}
            minimum={1}
            value={attendeesCount}
            onChange={(value) => this.setState({ attendeesCount: value })}
          />
        </Row>
        <Row horizontalAlign="center" marginTop={20}>
          <Button submit loading={loading} disabled={!submitEnabled}>{lang.book}</Button>
        </Row>
      </Form>
    );
  }
}

export default i18n({
  en: require( './lang/en.yaml'),
  fr: require( './lang/fr.yaml'),
  de: require( './lang/de.yaml'),
})(Accommodation);
