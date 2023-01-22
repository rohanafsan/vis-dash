import Chart from 'chart.js/auto';

import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const RadarChart = ({label, labels, selectedData}) => {
    
    var data = {
      labels: labels,
      datasets: [{
        label: label,
        data: selectedData,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgb(255, 99, 132)',
        pointBackgroundColor: 'rgb(255, 99, 132)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(255, 99, 132)'
      }]
    };
  
    var options = {
        scales: {
          yAxes: [{
            ticks: {
              suggestedMin: -20,
              suggestedMax: 30
            }
          }]
      }
    }
  
    return (
      <div>
        <Radar
          data={data}
          options={options}
        />
      </div>
    )
  }
  
export default RadarChart