import * as React from 'react';
import './App.css';
import PlantDashboard from './components/PlantDashboard/PlantDashboard';
import PlantList from './components/PlantList/PlantList';

import Grid from '@material-ui/core/Grid';


class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Grid container={true}>
          <Grid item={true}>
            <PlantList/>
          </Grid>
          <Grid item={true}>
            <PlantDashboard/>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default App;
