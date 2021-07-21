import {Map} from 'leaflet';

export default interface IMap {
  bounds: number[];
  map: Map | undefined;
  setMap: (map: Map) => void;
  setBounds: () => void;
}
