import * as React from 'react';
import './PlantDashboard.css';
import WaterDiagram from './WaterDiagram'

class PlantDashboard extends React.Component {
  public render() {
    return (
        <WaterDiagram/>
    );
  }
}

export default PlantDashboard;
