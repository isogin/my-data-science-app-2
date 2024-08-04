import React, { useState } from 'react';

interface DataTableProps {
  data: { id: number; category: string; value: number }[];
  setData: React.Dispatch<React.SetStateAction<{ id: number; category: string; value: number }[]>>;
}

const DataTable: React.FC<DataTableProps> = ({ data, setData }) => {
  const [filter, setFilter] = useState('');

  const handleInputChange = (id: number, field: 'category' | 'value', value: string) => {
    const newData = data.map((d) => 
      d.id === id ? { ...d, [field]: field === 'value' ? parseFloat(value) : value } : d
    );
    setData(newData);
  };

  const addRow = () => {
    const newRow = { id: data.length + 1, category: '', value: 0 };
    setData([...data, newRow]);
  };

  const removeRow = (id: number) => {
    const newData = data.filter((d) => d.id !== id);
    setData(newData);
  };

  const filteredData = data.filter((d) => d.category.includes(filter));

  return (
    <div className="mb-4">
      <h2 className="text-xl font-roboto mb-2">データセット</h2>
      <input
        type="text"
        placeholder="フィルタカテゴリー"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="p-2 border border-gray-300 rounded mb-4 w-full"
      />
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="border p-2">カテゴリー</th>
            <th className="border p-2">値</th>
            <th className="border p-2">操作</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((d) => (
            <tr key={d.id}>
              <td className="border p-2">
                <input
                  type="text"
                  value={d.category}
                  onChange={(e) => handleInputChange(d.id, 'category', e.target.value)}
                  className="w-full p-1 border rounded"
                />
              </td>
              <td className="border p-2">
                <input
                  type="number"
                  value={d.value}
                  onChange={(e) => handleInputChange(d.id, 'value', e.target.value)}
                  className="w-full p-1 border rounded"
                />
              </td>
              <td className="border p-2">
                <button onClick={() => removeRow(d.id)} className="p-1 bg-red-500 text-white rounded">削除</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={addRow} className="mt-2 p-2 bg-blue-500 text-white rounded">行を追加</button>
    </div>
  );
};

export default DataTable;
