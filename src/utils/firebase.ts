import firebase from 'firebase';
import DataSnapshot = firebase.database.DataSnapshot;
import { ObservableMap, extendObservable } from "mobx";

export default <V>(ref: string, data: ObservableMap<V>, instance: new (data: {}) => any) => {
  const dbRef = firebase.database().ref(ref);
  dbRef.once('value', (snapshot: DataSnapshot) => {
    const nextData: {[key: string]: V} = {};
    let total = 0;
    snapshot.forEach((snapshot: DataSnapshot): boolean => {
      total++;
      nextData[snapshot.key] = new instance(snapshot.val());
      return false;
    })
    let ready = false;
    let current = 0;
    dbRef.on('child_added', (snapshot: DataSnapshot) => {
      current++;
      if (!ready && current === total) ready = true;
      else if (ready) data.set(snapshot.key, new instance(snapshot.val()))
    });
    dbRef.on('child_changed', (snapshot: DataSnapshot) => {
      extendObservable(data.get(snapshot.key), snapshot.val())
    });
    dbRef.on('child_removed', (snapshot: DataSnapshot) => {
      data.delete(snapshot.key)
    });
    data.replace(nextData);
  });
  return data;
}
