import firebase from 'firebase';

type Accommodation = {
  attendDiner: boolean;
  attendBrunch: boolean;
  attendeesCount: number;
  bookHotel: boolean;
  name: string;
};

export const create = (accommodation: Accommodation) => {
  return new Promise((resolve, reject) => {
    firebase.database().ref('accommodations').push(accommodation)
      .then(resolve)
      .catch(reject);
  });
}
