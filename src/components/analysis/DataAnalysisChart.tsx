import React from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, LineElement, PointElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, LineElement, PointElement, Title, Tooltip, Legend);

interface DataAnalysisChartProps {
  data: { id: number; category: string; value: number }[];
  method: string;
}

const DataAnalysisChart: React.FC<DataAnalysisChartProps> = ({ data, method }) => {
  const chartData = {
    labels: data.map((d) => d.category),
    datasets: [
      {
        label: 'Values',
        data: data.map((d) => d.value),
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
        text: 'Data Analysis Chart',
      },
    },
  };

  return (
    <div className="w-full h-96 mb-8">
      {method === 'correlation' && <Line data={chartData} options={options} />}
      {method === 'crosstab' && <Bar data={chartData} options={options} />}
      {method === 'hypothesis' && <Pie data={chartData} options={options} />}
    </div>
  );
};

export default DataAnalysisChart;
