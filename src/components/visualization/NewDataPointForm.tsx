import React from 'react';

interface NewDataPointFormProps {
  addingNew: boolean;
  editingIndex: number | null;
  labels: string[];
  newDataPoint: string;
  setNewDataPoint: React.Dispatch<React.SetStateAction<string>>;
  addDataPoint: () => void;
  saveEdit: () => void;
}

const NewDataPointForm: React.FC<NewDataPointFormProps> = ({
  addingNew,
  editingIndex,
  labels,
  newDataPoint,
  setNewDataPoint,
  addDataPoint,
  saveEdit,
}) => {
  return (
    <>
      {addingNew && (
        <div className="mb-4">
          <h2 className="text-xl font-roboto mb-2">新しいデータポイントを追加:</h2>
          <span className="block mb-2">ラベル: Data {labels.length + 1}</span>
          <input
            type="number"
            value={newDataPoint}
            onChange={(e) => setNewDataPoint(e.target.value)}
            placeholder="データ値"
            className="w-full p-2 border border-gray-300 rounded mb-2"
          />
          <button
            onClick={addDataPoint}
            className="w-full p-2 bg-purple-500 text-white rounded hover:bg-purple-700 transition duration-300"
          >
            新規作成
          </button>
        </div>
      )}
      {editingIndex !== null && (
        <div className="mb-4">
          <h2 className="text-xl font-roboto mb-2">データポイントを編集中:</h2>
          <span className="block mb-2">ラベル: {labels[editingIndex]}</span>
          <input
            type="number"
            value={newDataPoint}
            onChange={(e) => setNewDataPoint(e.target.value)}
            placeholder="データ値"
            className="w-full p-2 border border-gray-300 rounded mb-2"
          />
          <button
            onClick={saveEdit}
            className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-300"
          >
            保存
          </button>
        </div>
      )}
    </>
  );
};

export default NewDataPointForm;
