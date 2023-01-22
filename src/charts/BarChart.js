import React, { useState, useEffect } from 'react'
import Chart from 'chart.js/auto';

import {
  Chart as ChartJS,

  BarElement,

} from 'chart.js';

import { Bar } from 'react-chartjs-2';

ChartJS.register(
  BarElement,
);


const BarChart = ({label, labels, selectedData}) => {
  var data = {
    labels: labels,
    datasets: [{
      label: label,
      data: selectedData,
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1
    }]
  };

  
  var options = {
    maintainAspectRatio: false,
    plugins: {
        customCanvasBackgroundColor: {
          color: 'black'
        }
    },
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
      <Bar
        data={data}
        height={400}
        options={options}
      />
    </div>
  )
}

export default BarChart