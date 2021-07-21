import {Box, Grid, Paper} from '@material-ui/core';
import React from 'react';
import './App.css';
import ControlButtons from './components/ControlButtons/ControlButtons';
import LookupMap from './components/LookupMap/LookupMap';
import ResultsMap from './components/ResultsMap/ResultsMap';
import {MapContextProviderComponent} from './contexts/MapContext';

export default function App() {
  return (
    <div className="App" style={{marginTop: '20px'}}>
      <MapContextProviderComponent>
        <Grid container item xs={12} justifyContent="center">
          <Grid container item xs={8} spacing={2} component={Paper}>
            <Grid item xs={5}>
              <LookupMap />
            </Grid>
            <Grid item xs={2}>
              <ControlButtons />
            </Grid>
            <Grid item xs={5}>
              <ResultsMap />
            </Grid>
          </Grid>
        </Grid>
      </MapContextProviderComponent>
    </div>
  );
}
