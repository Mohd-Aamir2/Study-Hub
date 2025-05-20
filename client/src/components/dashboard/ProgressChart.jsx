// Charts.jsx
import React from 'react';
import {
  Bar,
  Pie,
  Doughnut,
  Line,
  Radar
} from 'react-chartjs-2';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  RadialLinearScale,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  PointElement,
  LineElement,
  RadialLinearScale,
  Title,
  Tooltip,
  Legend
);

 const chartData = {
    labels: ['Math', 'Science', 'History', 'Language', 'Literature'],
    datasets: [
      {
        label: 'Study Hours This Week',
        data: [12, 8, 5, 9, 7],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
      {
        label: 'Study Hours Last Week',
        data: [10, 6, 7, 8, 5],
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
      },
    ],
  };

const options = {
  responsive: true,
  plugins: {
    legend: { position: 'top' },
    title: {
      display: true,
      text: 'Weekly Study Progress',
    },
  },
};

export default function Charts() {
  return (
    <div >
      <div className='chart'>
        <h4>📊 Bar Chart</h4>
        <Bar data={chartData} options={options} />
      </div>
{/* 
      <div>
        <h4>🥧 Pie Chart</h4>
        <Pie data={chartData} options={options} />
      </div>

      <div>
        <h4>🍩 Doughnut Chart</h4>
        <Doughnut data={chartData} options={options} />
      </div>

      <div>
        <h4>📈 Line Chart</h4>
        <Line data={chartData} options={options} />
      </div>

      <div>
        <h4>📉 Radar Chart</h4>
        <Radar data={chartData} options={options} />
      </div> */}
    </div>
  );
}
