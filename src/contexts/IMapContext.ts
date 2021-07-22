import {Map} from 'leaflet';

export default interface IMap {
  areResultsAvailable: boolean;
  areResultsLoading: boolean;
  imageData: any;
  map: Map | undefined;
  setMap: (map: Map) => void;
  calculateResults: (type: any) => void;
}
