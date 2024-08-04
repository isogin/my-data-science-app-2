import React, { useState, useEffect } from 'react';
import Navbar from '../components/common/Navbar';
import DataSet from '../components/statistics/DataSet';
import NewDataPointForm from '../components/visualization/NewDataPointForm';
import StatisticsResult from '../components/statistics/StatisticsResult';
import StatisticsCarousel from '../components/statistics/StatisticsCarousel';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Statistics = () => {
  const [dataPoints, setDataPoints] = useState<number[]>([65, 59, 80, 81, 56, 55]);
  const [labels, setLabels] = useState<string[]>(['Data 1', 'Data 2', 'Data 3', 'Data 4', 'Data 5', 'Data 6']);
  const [newDataPoint, setNewDataPoint] = useState<string>('');
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [addingNew, setAddingNew] = useState<boolean>(false);
  const [results, setResults] = useState<{
    mean: number;
    median: number;
    mode: number | number[];
    variance: number;
    stdDeviation: number;
  } | null>(null);

  useEffect(() => {
    calculateStatistics(dataPoints);
  }, [dataPoints]);

  const calculateStatistics = (data: number[]) => {
    const mean = data.reduce((a, b) => a + b, 0) / data.length;

    const sortedData = data.slice().sort((a, b) => a - b);
    const median = sortedData.length % 2 === 0
      ? (sortedData[sortedData.length / 2 - 1] + sortedData[sortedData.length / 2]) / 2
      : sortedData[Math.floor(sortedData.length / 2)];

    const mode = data.length > 0
      ? data
        .sort((a, b) =>
          data.filter(v => v === a).length
          - data.filter(v => v === b).length
        ).pop()
      : 0;

    const variance = data.reduce((a, b) => a + Math.pow(b - mean, 2), 0) / data.length;
    const stdDeviation = Math.sqrt(variance);

    setResults({
      mean,
      median,
      mode: mode !== undefined ? mode : 0,
      variance,
      stdDeviation,
    });
  };

  const addDataPoint = () => {
    if (newDataPoint) {
      const newIndex = dataPoints.length + 1;
      setLabels([...labels, `Data ${newIndex}`]);
      setDataPoints([...dataPoints, Number(newDataPoint)]);
      setNewDataPoint('');
      setAddingNew(false);
    }
  };

  const removeDataPoint = (index: number) => {
    const newDataPoints = [...dataPoints];
    const newLabels = [...labels];
    newDataPoints.splice(index, 1);
    newLabels.splice(index, 1);
    setDataPoints(newDataPoints);
    setLabels(newLabels);
  };

  const startEditing = (index: number) => {
    setEditingIndex(index);
    setNewDataPoint(String(dataPoints[index]));
  };

  const saveEdit = () => {
    if (editingIndex !== null && newDataPoint) {
      const updatedDataPoints = [...dataPoints];
      updatedDataPoints[editingIndex] = Number(newDataPoint);
      setDataPoints(updatedDataPoints);
      setNewDataPoint('');
      setEditingIndex(null);
    }
  };

  const barData = {
    labels: labels,
    datasets: [
      {
        label: 'Values',
        data: dataPoints,
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
        text: 'Statistical Measures',
      },
    },
  };

  return (
    <div className="min-h-screen bg-lightyellow flex flex-col items-center justify-center pt-20">
      <Navbar />
      <h1 className="text-3xl font-merriweather mb-8">統計の基礎</h1>
      <div className="w-3/4 lg:w-1/2 bg-white p-8 rounded shadow mb-8">
        <DataSet
          dataPoints={dataPoints}
          labels={labels}
          setEditingIndex={setEditingIndex}
          setAddingNew={setAddingNew}
          setNewDataPoint={setNewDataPoint}
          removeDataPoint={removeDataPoint}
        />
        <NewDataPointForm
          addingNew={addingNew}
          editingIndex={editingIndex}
          labels={labels}
          newDataPoint={newDataPoint}
          setNewDataPoint={setNewDataPoint}
          addDataPoint={addDataPoint}
          saveEdit={saveEdit}
        />
        <div className="w-full h-96 mb-8">
          <Bar data={barData} options={options} />
        </div>
        {results && <StatisticsResult results={results} />}
      </div>
      <div className="w-3/4 lg:w-1/2 bg-white p-8 rounded shadow mt-8">
        <StatisticsCarousel />
      </div>
    </div>
  );
};

export default Statistics;
