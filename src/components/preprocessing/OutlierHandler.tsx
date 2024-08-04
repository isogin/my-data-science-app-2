import React, { useState } from 'react';
import Tooltip from '../common/Tooltip';

interface OutlierHandlerProps {
  data: number[];
  setData: React.Dispatch<React.SetStateAction<number[]>>;
}

const OutlierHandler: React.FC<OutlierHandlerProps> = ({ data, setData }) => {
  const [threshold, setThreshold] = useState<number>(1.5);

  const handleOutliers = () => {
    const newData = data.filter(val => Math.abs(val) <= threshold);
    setData(newData);
  };

  return (
    <div className="mb-4">
      <h2 className="text-xl font-roboto mb-2">
        外れ値の処理
        <Tooltip text="データセット内の外れ値を処理します。">
          <span className="ml-2 text-gray-500 cursor-pointer group">?</span>
        </Tooltip>
      </h2>
      <input
        type="number"
        value={threshold}
        onChange={(e) => setThreshold(parseFloat(e.target.value))}
        placeholder="閾値を設定"
        className="w-full p-2 border border-gray-300 rounded mb-2"
      />
      <button
        onClick={handleOutliers}
        className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-300"
      >
        適用
      </button>
    </div>
  );
};

export default OutlierHandler;
