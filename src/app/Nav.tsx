import * as React from 'react';
import { namespace as ns } from './Header';
import '../styles/app/nav.scss';
import { Link } from 'react-router';

export const namespace = (): string => `${ns()}--nav`;

export interface NavProps {
}

const Nav: React.SFC<NavProps> = (props: NavProps): React.ReactElement<NavProps> => (
  <nav className={namespace()}>
    <ul className={`${namespace()}--list`}>
      <li className={`${namespace()}--list--item`}>
        <Link to="/rsvp" className={`${namespace()}--list--item--button`}>RSVP</Link>
      </li>
      <li className={`${namespace()}--list--item`}>
        <Link to="/" className={`${namespace()}--list--item--button`}>Menu</Link>
      </li>
      <li className={`${namespace()}--list--item`}>
        <Link to="/" className={`${namespace()}--list--item--button`}>Hébergement</Link>
      </li>
      <li className={`${namespace()}--list--item`}>
        <Link to="/" className={`${namespace()}--list--item--button`}>Île Narvak</Link>
      </li>
      <li className={`${namespace()}--list--item`}>
        <Link to="/" className={`${namespace()}--list--item--button`}>Déroulement</Link>
      </li>
      <li className={`${namespace()}--list--item`}>
        <Link to="/" className={`${namespace()}--list--item--button`}>Mémos</Link>
      </li>
    </ul>
  </nav>
);

export default Nav;
