import {LatLngExpression} from 'leaflet';
import _ from 'lodash';
import React, {useContext} from 'react';
import {MapContainer, TileLayer} from 'react-leaflet';
import {MapContext} from 'src/contexts/MapContext';

export default function LookupMap() {
  const {setMap} = useContext(MapContext);

  const position: LatLngExpression = [53.219, 6.566];
  const zoom: number = 15;

  return (
    <MapContainer
      center={position}
      zoom={zoom}
      scrollWheelZoom={false}
      whenCreated={setMap}
    >
      <TileLayer
        attribution="&copy; <a href='http://osm.org/copyright'>OpenStreetMap</a> contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {
        // Placeholder, we'll put our markers here
      }
    </MapContainer>
  );
}
