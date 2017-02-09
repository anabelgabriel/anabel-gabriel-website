import {observable} from "mobx";
let MapCollection: new<K, V>(iterable?: Iterable<V>) => Map<K, V> = class <V extends [{}, {}]> {
  constructor(iterable?: Iterable<V>) {
    return new Proxy(observable.map(new Map(iterable)), {});
  }
} as any;
export default MapCollection;
