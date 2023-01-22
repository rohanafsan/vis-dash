import React from 'react';
import Chart from 'chart.js/auto';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = ({label, labels, selectedData}) => {
    var data = {
        labels: labels,
        datasets: [{
          label: label,
          data: selectedData,
          backgroundColor: 'rgb(75, 192, 192)',
        }]
      };
      var options = {
        maintainAspectRatio: false,
        scales: {
          yAxes: [{
            ticks: {
              suggestedMin: -20,
              suggestedMax: 30
            }
          }]
        },
        legend: {
          labels: {
            fontSize: 25,
          },
        },
      }

    return (
        <div>
          <Line
            data={data}
            height={400}
            options={options}
          />
        </div>
      )
    }

export default LineChart