import React from 'react';
import Tooltip from '../common/Tooltip';

interface DataStandardizationProps {
  data: number[];
  setData: React.Dispatch<React.SetStateAction<number[]>>;
}

const DataStandardization: React.FC<DataStandardizationProps> = ({ data, setData }) => {
  const standardizeData = () => {
    const validData = data.filter(val => !isNaN(val));
    const mean = validData.reduce((acc, val) => acc + val, 0) / validData.length;
    const stdDev = Math.sqrt(validData.reduce((acc, val) => acc + (val - mean) ** 2, 0) / validData.length);
    const newData = data.map(val => (isNaN(val) ? NaN : (val - mean) / stdDev));
    setData(newData);
  };

  return (
    <div className="mb-4">
      <h2 className="text-xl font-roboto mb-2">
        データの標準化
        <Tooltip text="データを標準化して比較可能にします。">
          <span className="ml-2 text-gray-500 cursor-pointer group">?</span>
        </Tooltip>
      </h2>
      <button
        onClick={standardizeData}
        className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-300"
      >
        適用
      </button>
    </div>
  );
};

export default DataStandardization;
