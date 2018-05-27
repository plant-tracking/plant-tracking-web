import * as React from 'react';

import plantimg from '../../images/Carla.png';

import './PlantCard.css';

import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

class PlantCard extends React.Component {
  private isActive = false;

  public render() {
    return (
      <div onClick={event => {this.isActive = true}}>
        <Card className={this.isActive ? 'active' : 'notactive'}>
          <CardMedia>
            <img
              src={plantimg}
              title="Plant Image"
              width={191}
              height={157}
            />
          </CardMedia>
          <CardContent>
            <Typography className="nickname">Carla</Typography>
            <Typography className="genus">Monsterra deliciosa</Typography>
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default PlantCard;