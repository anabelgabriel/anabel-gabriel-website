import * as React from 'react';
import { inject, observer } from 'mobx-react';
import Attendee from "../../stores/Attendee";
import { Paragraph, Layout, LayoutContent } from '../../components';
import '../../styles/pages/home/index.scss';

export const namespace = (): string => 'home';

export interface ComponentProps {
  attendees?: Array<Attendee>;
}

const Component:React.SFC<any> = ({ attendees }: ComponentProps):React.ReactElement<ComponentProps> => {
  return (
    <Layout>
      <Paragraph align="center" font="edwardian" size={30} className={`${namespace()}--preload-font`}>
        Preload font
      </Paragraph>
      <LayoutContent maxWidth={760} desktop tablet>
        <Paragraph align="center" font="edwardian" size={30}>
          Vous êtes invités au mariage d’Anabel et Gabriel. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Suspendisse ante nunc, commodo et pretium in, pharetra non felis.
        </Paragraph>
      </LayoutContent>
      <div className={`${namespace()}--images`}>
        <img src={require('../../images/home/wines@2x.jpg')} className={`${namespace()}--images--image`}/>
      </div>
    </Layout>
  );
}

export default inject('attendees')(observer(Component));
