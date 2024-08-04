import React from 'react';
import { Scatter } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend, ChartDataset } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);

interface CorrelationAnalysisProps {
  data: { id: number; category: string; value: number }[];
}

const CorrelationAnalysis: React.FC<CorrelationAnalysisProps> = ({ data }) => {
  // 相関係数の計算
  const calculateCorrelation = (data: { category: string; value: number }[]) => {
    const n = data.length;
    const sumX = data.reduce((sum, d) => sum + d.category.charCodeAt(0), 0);
    const sumY = data.reduce((sum, d) => sum + d.value, 0);
    const sumXY = data.reduce((sum, d) => sum + d.category.charCodeAt(0) * d.value, 0);
    const sumX2 = data.reduce((sum, d) => sum + Math.pow(d.category.charCodeAt(0), 2), 0);
    const sumY2 = data.reduce((sum, d) => sum + Math.pow(d.value, 2), 0);

    const numerator = sumXY - (sumX * sumY) / n;
    const denominator = Math.sqrt((sumX2 - Math.pow(sumX, 2) / n) * (sumY2 - Math.pow(sumY, 2) / n));
    return denominator === 0 ? 0 : numerator / denominator;
  };

  const correlation = calculateCorrelation(data);

  // 回帰直線の計算
  const calculateRegressionLine = (data: { category: string; value: number }[]) => {
    const n = data.length;
    const sumX = data.reduce((sum, d) => sum + d.category.charCodeAt(0), 0);
    const sumY = data.reduce((sum, d) => sum + d.value, 0);
    const sumXY = data.reduce((sum, d) => sum + d.category.charCodeAt(0) * d.value, 0);
    const sumX2 = data.reduce((sum, d) => sum + Math.pow(d.category.charCodeAt(0), 2), 0);

    const slope = (n * sumXY - sumX * sumY) / (n * sumX2 - Math.pow(sumX, 2));
    const intercept = (sumY - slope * sumX) / n;

    return data.map(d => ({
      x: d.category.charCodeAt(0),
      y: slope * d.category.charCodeAt(0) + intercept,
    }));
  };

  const regressionLine = calculateRegressionLine(data);

  const scatterDataset: ChartDataset<'scatter', { x: number; y: number }[]> = {
    label: 'データポイント',
    data: data.map((d) => ({
      x: d.category.charCodeAt(0),
      y: d.value,
    })),
    backgroundColor: 'rgba(75, 192, 192, 0.2)',
    borderColor: 'rgba(75, 192, 192, 1)',
    pointRadius: 5,
  };

  const lineDataset: ChartDataset<'scatter', { x: number; y: number }[]> = {
    label: '回帰直線',
    data: regressionLine,
    borderColor: 'rgba(255, 99, 132, 1)',
    borderWidth: 2,
    fill: false,
    pointRadius: 0,
    showLine: true, // これにより、scatterチャートでもラインが描画されます
  };

  const chartData = {
    datasets: [scatterDataset, lineDataset],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        type: 'linear' as const,
        position: 'bottom' as const,
        title: {
          display: true,
          text: 'Category',
        },
        ticks: {
          callback: (value: number) => String.fromCharCode(value),
        },
      },
      y: {
        title: {
          display: true,
          text: 'Value',
        },
      },
    },
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: `Correlation: ${correlation.toFixed(2)}`,
      },
      tooltip: {
        callbacks: {
          label: function (context: any) {
            const label = context.dataset.label || '';
            const value = context.raw;
            return `${label}: (${String.fromCharCode(value.x)}, ${value.y})`;
          },
        },
      },
    },
  };

  return (
    <div className="w-full h-96 mb-8">
      <Scatter data={chartData}/>
    </div>
  );
};

export default CorrelationAnalysis;
