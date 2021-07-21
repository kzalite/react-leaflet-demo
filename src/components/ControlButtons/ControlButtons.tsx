import {Button} from '@material-ui/core';
import React, {useContext} from 'react';
import {MapContext} from 'src/contexts/MapContext';

export default function ControlButtons() {
  const {setBounds} = useContext(MapContext);

  function handleClick() {
    setBounds();
  }

  return <Button onClick={handleClick}>NDVI</Button>;
}