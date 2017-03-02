import Attendee from './index';
import validator from 'validator';

const rules = {
  email: {
    'email_invalid': (a: Attendee) => a.email && validator.isEmail(a.email),
  },
  firstName: {
    'first_name_length': (a: Attendee) => a.firstName && validator.isLength(a.firstName, { min: 1 }),
  },
  lastName: {
    'last_name_length': (a: Attendee) => a.lastName && validator.isLength(a.lastName, { min: 1 }),
  },
  isAttending: {
    'is_attending_value': (a: Attendee) => a.isAttending !== undefined && a.isAttending !== null,
  }
};

export default (a: Attendee): Map<string, boolean | Array<string>> => {
  const result = new Map();
  for (let prop in rules) {
    if (rules.hasOwnProperty(prop)) {
      let errors = [];
      for (let rule in rules[prop]) {
        if (rules[prop].hasOwnProperty(rule)) {
          if (!rules[prop][rule](a)) errors.push(rule);
        }
      }
      result.set(prop, errors.length ? errors : true);
    }
  }
  return result;
};
