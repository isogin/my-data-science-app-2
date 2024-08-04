import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import Navbar from '../components/common/Navbar';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const generateRandomData = (numPoints: number): number[] => {
  return Array.from({ length: numPoints }, () => Math.floor(Math.random() * 100));
};

const generateNormalDistribution = (numPoints: number, mean: number, stdDev: number): number[] => {
  const data = [];
  for (let i = 0; i < numPoints; i++) {
    const value = mean + stdDev * (Math.random() - 0.5);
    data.push(value);
  }
  return data;
};

const Simulation = () => {
  const [data, setData] = useState<number[]>([]);
  const [numPoints, setNumPoints] = useState<number>(10);
  const [mean, setMean] = useState<number>(50);
  const [stdDev, setStdDev] = useState<number>(10);

  const handleRandomData = () => {
    setData(generateRandomData(numPoints));
  };

  const handleNormalDistribution = () => {
    setData(generateNormalDistribution(numPoints, mean, stdDev));
  };

  const barData = {
    labels: Array.from({ length: data.length }, (_, i) => i + 1),
    datasets: [
      {
        label: 'Simulated Data',
        data: data,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Simulated Data',
      },
    },
  };

  return (
    <div className="min-h-screen bg-lightyellow flex flex-col items-center justify-center pt-20">
      <Navbar />
      <h1 className="text-3xl font-merriweather mb-8">データシミュレーションページ</h1>
      <div className="mb-8">
        <label className="block mb-2">
          Number of Data Points:
          <input
            type="number"
            value={numPoints}
            onChange={(e) => setNumPoints(Number(e.target.value))}
            className="p-2 border border-gray-300 rounded ml-2"
          />
        </label>
        <button onClick={handleRandomData} className="m-2 p-2 bg-blue-500 text-white rounded">Generate Random Data</button>
        <button onClick={handleNormalDistribution} className="m-2 p-2 bg-green-500 text-white rounded">Generate Normal Distribution</button>
        <label className="block mt-4 mb-2">
          Mean:
          <input
            type="number"
            value={mean}
            onChange={(e) => setMean(Number(e.target.value))}
            className="p-2 border border-gray-300 rounded ml-2"
          />
        </label>
        <label className="block mb-4">
          Standard Deviation:
          <input
            type="number"
            value={stdDev}
            onChange={(e) => setStdDev(Number(e.target.value))}
            className="p-2 border border-gray-300 rounded ml-2"
          />
        </label>
      </div>
      <div className="w-3/4 lg:w-1/2 mb-8">
        <Bar data={barData} options={options} />
      </div>
    </div>
  );
};

export default Simulation;
