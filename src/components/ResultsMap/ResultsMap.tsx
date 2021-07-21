import axios, {AxiosResponse} from 'axios';
import _ from 'lodash';
import React, {useContext, useEffect, useState} from 'react';
import {MapContext} from 'src/contexts/MapContext';

export default function ResultsMap() {
  const {bounds} = useContext(MapContext);

  const serviceEndPoint: string = 'https://code-de.rasdaman.com/rasdaman/ows';
  const baseWcsUrl: string = serviceEndPoint + '?service=WCS&version=2.0.1';

  const request: string = '&REQUEST=GetCoverage';
  const coverageId: string = '&COVERAGEID=S2_L2A_32631_TCI_60m';
  const subsetTime: string = '&SUBSET=ansi("2017-04-03")';

  const encodeFormat: string = '&FORMAT=image/jpeg';

  const [imageData, setImageData] = useState<string>();

  useEffect(() => {
    if (!_.isEmpty(bounds)) {
      //   const subsetLongitude: string = `&SUBSET=E(${bounds[0]},${bounds[1]})`;
      //   const subsetLatitude: string = `&SUBSET=N(${bounds[2]},${bounds[3]})`;
      const subsetLongitude: string = `&SUBSET=E(641395,668861)`;
      const subsetLatitude: string = `&SUBSET=N(5313111,5329559)`;

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
        });
    }
  }, [baseWcsUrl, bounds]);

  useEffect(() => {
    console.log(bounds);
  }, [bounds]);

  return imageData ? <img className="result-map" src={imageData} /> : <></>;
}
