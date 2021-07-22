import {CircularProgress, Typography} from '@material-ui/core';
import _ from 'lodash';
import React, {useContext} from 'react';
import {MapContext} from 'src/contexts/MapContext';

export default function ResultsMap() {
  const {areResultsAvailable, areResultsLoading, imageData} =
    useContext(MapContext);

  function getComponentToDisplay(): JSX.Element {
    if (!areResultsAvailable && !areResultsLoading) {
      return (
        <Typography>
          Select the desired analysis area via the map and click one of the
          buttons!
        </Typography>
      );
    } else if (!areResultsAvailable && areResultsLoading) {
      return <CircularProgress />;
    } else {
      return <img className="result-map" src={imageData} />;
    }
  }

  return getComponentToDisplay();
}
