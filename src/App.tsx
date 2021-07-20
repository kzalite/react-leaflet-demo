import {Box, Grid, Paper} from '@material-ui/core';
import React from 'react';
import './App.css';
import LookupMap from './components/LookupMap/LookupMap';
import ResultsMap from './components/ResultsMap/ResultsMap';

export default function App() {
  return (
    <div className="App" style={{marginTop: '20px'}}>
      <Grid container item xs={12} justifyContent="center">
        <Grid container item xs={8} spacing={2} component={Paper}>
          <Grid item xs={6}>
            <LookupMap />
          </Grid>
          <Grid item xs={6}>
            <ResultsMap />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
