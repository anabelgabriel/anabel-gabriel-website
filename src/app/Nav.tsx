import * as React from 'react';
import { findDOMNode } from 'react-dom';
import '../styles/app/nav.scss';

export const namespace = (): string => 'app--nav';

export interface ComponentProps extends React.DOMAttributes<any> {
  className?:string;
}

class Component extends React.Component<ComponentProps, void> {
  public componentDidMount() {
  }

  public render() {
    return (
      <div className={namespace()}>
        <div className={`${namespace()}--drawer`}>
          <div className={`${namespace()}--drawer--content`}>
            jello<br/>jello<br/>jello<br/>jello<br/>jello<br/>jello<br/>jello<br/>
            jello<br/>jello<br/>jello<br/>jello<br/>jello<br/>jello<br/>jello<br/>
            jello<br/>jello<br/>jello<br/>jello<br/>jello<br/>jello<br/>jello<br/>
            jello<br/>jello<br/>jello<br/>jello<br/>jello<br/>jello<br/>jello<br/>
            jello<br/>jello<br/>jello<br/>jello<br/>jello<br/>jello<br/>jello<br/>
            jello<br/>jello<br/>jello<br/>jello<br/>jello<br/>jello<br/>jello<br/>
            jello<br/>jello<br/>jello<br/>jello<br/>jello<br/>jello<br/>jello<br/>
            jello<br/>jello<br/>jello<br/>jello<br/>jello<br/>jello<br/>jello<br/>
          </div>
        </div>
        <div className={`${namespace()}--drawer-background`}/>
      </div>
    );
  }
}

export default Component;
