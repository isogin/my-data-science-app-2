import React from 'react';

interface StatisticsResultProps {
  results: {
    mean: number;
    median: number;
    mode: number | number[];
    variance: number;
    stdDeviation: number;
  };
}

const StatisticsResult: React.FC<StatisticsResultProps> = ({ results }) => {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-roboto mb-4">計算結果:</h2>
      <ul className="list-disc list-inside text-gray-700">
        <li>平均: {results.mean.toFixed(2)}</li>
        <li>中央値: {results.median.toFixed(2)}</li>
        <li>最頻値: {Array.isArray(results.mode) ? results.mode.join(', ') : results.mode}</li>
        <li>分散: {results.variance.toFixed(2)}</li>
        <li>標準偏差: {results.stdDeviation.toFixed(2)}</li>
      </ul>
    </div>
  );
};

export default StatisticsResult;
