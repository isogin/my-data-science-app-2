import React from 'react';

interface DataSetProps {
  dataPoints: number[];
  labels: string[];
  setEditingIndex: React.Dispatch<React.SetStateAction<number | null>>;
  setAddingNew: React.Dispatch<React.SetStateAction<boolean>>;
  setNewDataPoint: React.Dispatch<React.SetStateAction<string>>;
  removeDataPoint: (index: number) => void;
}

const DataSet: React.FC<DataSetProps> = ({ dataPoints, labels, setEditingIndex, setAddingNew, setNewDataPoint, removeDataPoint }) => {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-roboto mb-4">データセット:</h2>
      <ul className="list-disc list-inside text-gray-700">
        {dataPoints.map((value: number, index: number) => (
          <li key={index} className="flex justify-between items-center mb-2">
            <span>{labels[index]}: {value}</span>
            <div>
              <button
                onClick={() => {
                  setEditingIndex(index);
                  setNewDataPoint(String(value));
                  setAddingNew(false);
                }}
                className="p-1 bg-yellow-500 text-white rounded hover:bg-yellow-700 transition duration-300 mr-2"
              >
                編集
              </button>
              <button
                onClick={() => removeDataPoint(index)}
                className="p-1 bg-red-500 text-white rounded hover:bg-red-700 transition duration-300"
              >
                削除
              </button>
            </div>
          </li>
        ))}
      </ul>
      <button
        onClick={() => {
          setEditingIndex(null);
          setNewDataPoint('');
          setAddingNew(true);
        }}
        className="w-full p-2 mt-4 bg-green-500 text-white rounded hover:bg-green-700 transition duration-300"
      >
        追加
      </button>
    </div>
  );
};

export default DataSet;
