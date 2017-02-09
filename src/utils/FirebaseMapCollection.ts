import MapCollection from "./MapCollection";
import {extendObservable} from 'mobx';
import firebase from 'firebase';
import DataSnapshot = firebase.database.DataSnapshot;
import Reference = firebase.database.Reference;

abstract class FirebaseMapCollection<K, V> extends MapCollection<string, V> {
  constructor(protected ref: Reference, instance: new (data: {}) => any) {
    super();
    ref.once('value', (data: DataSnapshot) => {
      data.forEach((data: DataSnapshot): boolean => {
        this.set(data.key, new instance(data.val()));
        return false;
      })
    });
    ref.on('child_added', (data: DataSnapshot) => this.set(data.key, new instance(data.val())));
    ref.on('child_changed', (data: DataSnapshot) => extendObservable(this.get(data.key), data.val()));
    ref.on('child_removed', (data: DataSnapshot) => this.delete(data.key));
  }
}

export default FirebaseMapCollection;
