import React, { useState } from 'react';
import Tooltip from '../common/Tooltip';

interface MissingValueHandlerProps {
  data: number[];
  setData: React.Dispatch<React.SetStateAction<number[]>>;
}

const MissingValueHandler: React.FC<MissingValueHandlerProps> = ({ data, setData }) => {
  const [method, setMethod] = useState<'mean' | 'remove'>('mean');

  const handleMissingValues = () => {
    let newData = [...data];
    if (method === 'mean') {
      const validData = newData.filter(val => !isNaN(val));
      const mean = validData.reduce((acc, val) => acc + val, 0) / validData.length;
      newData = newData.map(val => (isNaN(val) ? mean : val));
    } else if (method === 'remove') {
      newData = newData.filter(val => !isNaN(val));
    }
    setData(newData);
  };

  return (
    <div className="mb-4">
      <h2 className="text-xl font-roboto mb-2">
        欠損値の処理
        <Tooltip text="データセット内の欠損値を処理します。">
          <span className="ml-2 text-gray-500 cursor-pointer group">?</span>
        </Tooltip>
      </h2>
      <select
        onChange={(e) => setMethod(e.target.value as 'mean' | 'remove')}
        value={method}
        className="p-2 border border-gray-300 rounded mb-2"
      >
        <option value="mean">平均値で補完</option>
        <option value="remove">欠損値を削除</option>
      </select>
      <button
        onClick={handleMissingValues}
        className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-300"
      >
        適用
      </button>
    </div>
  );
};

export default MissingValueHandler;
