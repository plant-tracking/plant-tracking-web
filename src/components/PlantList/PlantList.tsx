import * as React from 'react';
import './PlantList.css';

import plus from '../../images/plus.svg';

import PlantCard from './PlantCard'

class PlantList extends React.Component {
  public render() {
    return (
        <div className="PlantList">
          <table>
            <tr>
              <td><PlantCard/></td>
              <td><PlantCard/></td>
              <td><PlantCard/></td>
            </tr>
            <tr>
              <td><PlantCard/></td>
              <td><img src={plus}/>
              <p>add plant</p></td>
            </tr>
          </table>
        </div>
    );
  }
}

export default PlantList;
