import axios, {AxiosResponse} from 'axios';
import {Map} from 'leaflet';
import _ from 'lodash';
import React, {createContext, useCallback, useState} from 'react';
import IMapContext from './IMapContext';

export const MapContext = createContext<IMapContext>({} as IMapContext);

export function MapContextProviderComponent(props: {children: any}) {
  const [map, setMap] = useState<Map>();
  const [areResultsAvailable, setAreResultsAvailable] = useState(false);
  const [areResultsLoading, setAreResultsLoading] = useState(false);
  const [imageData, setImageData] = useState<string>();

  function calculateResults(type: any) {
    setAreResultsLoading(true);
    setAreResultsAvailable(false);
    const serviceEndPoint: string = 'https://code-de.rasdaman.com/rasdaman/ows';
    const baseWcsUrl: string = serviceEndPoint + '?service=WCS&version=2.0.1';

    const request: string = '&REQUEST=GetCoverage';
    const coverageId: string = '&COVERAGEID=S1_GRD_IW_VV';
    const subsetTime: string = '&SUBSET=ansi("2017-06-01")';

    const encodeFormat: string = '&FORMAT=image/jpeg';
    if (map) {
      const bounds = map.getBounds();
      const subsetLongitude: string = `&SUBSET=Lon(${
        bounds.getSouthWest().lng
      },${bounds.getNorthEast().lng})`;
      const subsetLatitude: string = `&SUBSET=Lat(${
        bounds.getSouthWest().lat
      },${bounds.getNorthEast().lat})`;

      axios
        .get(
          baseWcsUrl +
            request +
            coverageId +
            subsetTime +
            subsetLongitude +
            subsetLatitude +
            encodeFormat,
          {responseType: 'blob'}
        )
        .then((response: AxiosResponse) => {
          setImageData(URL.createObjectURL(response.data));
          setAreResultsAvailable(true);
          setAreResultsLoading(false);
        })
        .catch(() => {
          setAreResultsAvailable(false);
          setAreResultsLoading(false);
        });
    } else {
      setAreResultsLoading(false);
    }
  }

  const setMapWrapper = useCallback(
    (map: Map): void => {
      setMap(map);
    },
    [setMap]
  );

  return (
    <MapContext.Provider
      value={{
        areResultsAvailable,
        areResultsLoading,
        imageData,
        map,
        setMap: setMapWrapper,
        calculateResults
      }}
    >
      {props.children}
    </MapContext.Provider>
  );
}
