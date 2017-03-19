import * as React from 'react';
import { namespace as ns } from './Header';
import '../styles/app/nav.scss';
import { Link } from 'react-router';
import { i18n } from '../utils';

export const namespace = (): string => `${ns()}--nav`;

export interface NavProps {
  lang?: any;
}

const Nav: React.SFC<NavProps> = ({ lang }: NavProps): React.ReactElement<NavProps> => (
  <nav className={namespace()}>
    <ul className={`${namespace()}--list`}>
      <li className={`${namespace()}--list--item`}>
        <Link to="/rsvp" className={`${namespace()}--list--item--button`}>{lang.rsvp}</Link>
      </li>
      <li className={`${namespace()}--list--item`}>
        <Link to="/accommodation" className={`${namespace()}--list--item--button`}>{lang.accommodation}</Link>
      </li>
      <li className={`${namespace()}--list--item`}>
        <Link to="/menu" className={`${namespace()}--list--item--button`}>{lang.menu}</Link>
      </li>
      <li className={`${namespace()}--list--item`}>
        <Link to="/navark" className={`${namespace()}--list--item--button`}>{lang.navark}</Link>
      </li>
      <li className={`${namespace()}--list--item`}>
        <Link to="/unfolding" className={`${namespace()}--list--item--button`}>{lang.unfolding}</Link>
      </li>
      <li className={`${namespace()}--list--item`}>
        <Link to="/memos" className={`${namespace()}--list--item--button`}>{lang.memos}</Link>
      </li>
    </ul>
  </nav>
);

export default i18n({
  en: require( './lang/en/nav.yaml'),
  fr: require( './lang/fr/nav.yaml'),
  de: require( './lang/de/nav.yaml'),
})(Nav);
