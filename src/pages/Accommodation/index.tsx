import * as React from 'react';
import '../../styles/pages/accommodation/index.scss';
import {
  Layout, LayoutContent, Paragraph, Image, Ornament, Button, Row, CheckBox, Separator, TextField, NumberField, Label,
  Form, View
} from '../../components';
import { create } from '../../stores/Accomodation';

const namespace = (): string => 'accommodation';

interface Props {
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
    const { success, error } = this.state;

    return (
      <Layout className={namespace()}>
        <Image src={require('../../images/accommodation/hotel.jpg')} className={`${namespace()}--photo`}/>
        <LayoutContent>
          <Paragraph>
            Pour les personnes intéressées, nous séjournerons à l’hôtel de Mortagne.
          </Paragraph>
          <Paragraph>
            Celui-ci est situé à seulement huit minutes de l’île Navark.
          </Paragraph>
          <Row horizontalAlign="center">
            <Button>Réserver</Button>
          </Row>
          <Ornament/>
        </LayoutContent>
        <Image src={require('../../images/accommodation/sens.jpg')} className={`${namespace()}--photo`}/>
        <LayoutContent>
          <Paragraph>
            Pour ceux qui seront présents à l’hôtel, nous ferons un souper le vendredi 7 juillet, ainsi qu’un brunch
            le dimanche 9 juillet.
          </Paragraph>
          <Paragraph>
            Merci de nous confirmer votre présence, afin que nous puissions faire la réservation
            au restaurant « Sens ».
          </Paragraph>
          <Ornament/>
          {success ? (
              <Paragraph size={30} font="edwardian" align="center">Au plaisir de vous avoir avec nous!</Paragraph>
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
    const { attendDiner, attendBrunch, attendeesCount, bookHotel, name, loading } = this.state;
    const submitEnabled = ((attendBrunch || attendDiner || bookHotel) && name) ? true : false;
    return (
      <Form onSubmit={this.handleSubmit}>
        <CheckBox
          label="Nous aurons réservé une chambre"
          onChange={(value) => this.setState({ bookHotel: value })}
          selected={bookHotel}
        />
        <Separator/>
        <Label>
          Nous serons présent au:
        </Label>
        <CheckBox
          label="Souper du vendredi"
          onChange={(value) => this.setState({ attendDiner: value })}
          selected={attendDiner}
        />
        <CheckBox
          label="Brunch du dimanche"
          onChange={(value) => this.setState({ attendBrunch: value })}
          selected={attendBrunch}
        />
        <Separator/>
        <TextField
          label="Votre Nom"
          value={name}
          onChange={(value: any) => this.setState({ name: value })}
        />
        <Row horizontalAlign="center">
          <NumberField
            label="Nous serons"
            maximum={6}
            minimum={1}
            value={attendeesCount}
            onChange={(value) => this.setState({ attendeesCount: value })}
          />
        </Row>
        <Row horizontalAlign="center" marginTop={20}>
          <Button submit loading={loading} disabled={!submitEnabled}>Réserver</Button>
        </Row>
      </Form>
    );
  }
}

export default Accommodation;
