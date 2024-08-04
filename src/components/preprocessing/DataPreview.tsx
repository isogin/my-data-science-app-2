import React from 'react';

interface DataPreviewProps {
  data: number[];
}

const DataPreview: React.FC<DataPreviewProps> = ({ data }) => {
  const formatValue = (value: number) => {
    return isNaN(value) ? 'NaN' : value.toPrecision(3);
  };

  return (
    <div className="mb-8">
      <h2 className="text-xl font-roboto mb-4">データプレビュー</h2>
      <div className="grid grid-cols-3 gap-4">
        {data.map((value, index) => (
          <div key={index} className="p-4 bg-gray-200 rounded shadow">
            <h3 className="text-lg font-roboto">Data {index + 1}</h3>
            <p className="text-2xl text-blue-500">{formatValue(value)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DataPreview;
