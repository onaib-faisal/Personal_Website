// components/SkillsChart.js

import React from 'react';
import { Bar } from 'react-chartjs-2';

function SkillsChart() {
  const data = {
    labels: ['Python', 'HTML', 'CSS', 'JavaScript', 'Dart'],
    datasets: [
      {
        label: 'Proficiency',
        data: [95, 90, 90, 85, 80],
        backgroundColor: ['#009688', '#FFC107', '#03A9F4', '#8BC34A', '#673AB7'],
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            max: 100,
          },
        },
      ],
    },
  };

  return <Bar data={data} options={options} />;
}

export default SkillsChart;
