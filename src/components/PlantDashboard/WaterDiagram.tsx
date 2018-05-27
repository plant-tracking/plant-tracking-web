import * as React from 'react';
import './WaterDiagram.css';

import {Line, LineChart} from 'recharts'

class WaterDiagram extends React.Component {

  private waterData = [
    {name: 'Jan', uv: 3700},
    {name: 'Feb', uv: 3000},
    {name: 'Mar', uv: 2000},
    {name: 'Apr', uv: 2780},
    {name: 'May', uv: 2000},
    {name: 'Jun', uv: 1800},
    {name: 'Jul', uv: 2600},
    {name: 'Aug', uv: 2900},
    {name: 'Sep', uv: 3500},
    {name: 'Oct', uv: 3000},
    {name: 'Nov', uv: 2400},
    {name: 'Dec', uv: 2780}
  ]

  public render() {
    return (
      <LineChart width={400} height={400} data={this.waterData}>
        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
      </LineChart>
    )
  }
}

export default WaterDiagram;
