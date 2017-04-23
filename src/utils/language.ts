export default function (): 'en' | 'de' | 'fr' {
  let defaultLanguage: string;
  if (localStorage && localStorage['language']) defaultLanguage = localStorage['language'];
  else defaultLanguage = navigator.language;
  if (defaultLanguage) defaultLanguage = defaultLanguage.substring(0, 2);

  if (['en', 'fr', 'de'].indexOf(defaultLanguage) === -1) {
    return 'en';
  }
  return defaultLanguage as any;
};
