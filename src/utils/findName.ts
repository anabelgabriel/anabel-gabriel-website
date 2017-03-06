import levenshtein from 'fast-levenshtein';
import removeAccents from './removeAccents';

export default (needle: string, haystack: string): boolean => {
  const distance = levenshtein.get(removeAccents(needle).toLowerCase(), removeAccents(haystack).toLowerCase());
  if (needle.length > 5 && distance <= 3) return true;
  return false;
};
