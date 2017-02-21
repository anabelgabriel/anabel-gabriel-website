import * as React from 'react';

export default function <P>(langs: {[key: string]: any}): (WrappedComponent: React.ClassType<P, any, any>) => React.ClassType<P, any, any> {
  return (WrappedComponent) => (props) => {
    let lang: any;
    let defaultLanguage: string;
    if (localStorage && localStorage['language']) defaultLanguage = localStorage['language'];
    else defaultLanguage = navigator.language;
    if (defaultLanguage) defaultLanguage = defaultLanguage.substring(0, 2);
    if (typeof langs[defaultLanguage] !== 'undefined') lang = langs[defaultLanguage];
    else {
      for (let prop in langs) {
        if (langs.hasOwnProperty(prop)) {
          lang = langs[prop];
          break;
        }
      }
    }
    return <WrappedComponent {...props} lang={lang}/>
  };
};
