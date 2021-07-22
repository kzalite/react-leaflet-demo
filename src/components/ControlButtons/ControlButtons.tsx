import {Button} from '@material-ui/core';
import React, {useContext} from 'react';
import {MapContext} from 'src/contexts/MapContext';

export default function ControlButtons() {
  const {calculateResults} = useContext(MapContext);

  function handleClick() {
    calculateResults('s1vv');
  }

  return (
    <Button variant="outlined" onClick={handleClick}>
      S1VV
    </Button>
  );
}
