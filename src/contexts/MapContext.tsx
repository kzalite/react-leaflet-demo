import {Map} from 'leaflet';
import React, {createContext, useCallback, useEffect, useState} from 'react';
import IMapContext from './IMapContext';

export const MapContext = createContext<IMapContext>({} as IMapContext);

export function MapContextProviderComponent(props: {children: any}) {
  const [map, setMap] = useState<Map>();
  const [bounds, setBounds] = useState<number[]>([]);

  function setBoundsWrapper() {
    const newBounds = map!.getBounds();
    setBounds([
      newBounds.getSouthWest().lng,
      newBounds.getNorthEast().lng,
      newBounds.getSouthWest().lat,
      newBounds.getNorthEast().lat
    ]);
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
        bounds,
        map,
        setMap: setMapWrapper,
        setBounds: setBoundsWrapper
      }}
    >
      {props.children}
    </MapContext.Provider>
  );
}
