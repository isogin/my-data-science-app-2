import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface DataChartProps {
  data: number[];
}

const DataChart: React.FC<DataChartProps> = ({ data }) => {
  const chartData = {
    labels: data.map((_, index) => `Data ${index + 1}`),
    datasets: [
      {
        label: 'Values',
        data: data,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Data Chart',
      },
    },
  };

  return (
    <div className="w-full h-96 mb-8">
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default DataChart;
