// set up as stateful component because ideally this will be a living file that updates yearly or possibly monthly
import React, { Component } from 'react';
import {Radar} from 'react-chartjs-2';

const data = {
  labels: ['Shoe Collection', 'Whiskey Collection', 'Art Collection', 'Hat Collection', 'DVD Collection', 'Spice Rack Collection', 'Gaming Collection'],
  datasets: [
    {
      label: 'Year 1 Trophy Case Items Added',
      backgroundColor: 'rgba(179,181,198,0.2)',
      borderColor: 'rgba(179,181,198,1)',
      pointBackgroundColor: 'rgba(179,181,198,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(179,181,198,1)',
      //mongoD data is substituted here:
      data: [65, 59, 90, 81, 56, 55, 40]
    },
    {
      label: 'Year 2 Trophy Case Items Added',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      pointBackgroundColor: 'rgba(255,99,132,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(255,99,132,1)',
      //mongoD data is substituted here:
      data: [28, 48, 40, 19, 96, 27, 100]
    }
  ]
};
class radarChart extends Component {
  state = {  }
  render() { 
    return (
      <div>
        <h4>Your Collections Data:</h4>
        <Radar data={data} />
      </div>
    );
  }
}
 
export default radarChart;

