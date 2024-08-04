import React, { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Navbar from '../components/common/Navbar';
import DraggableDataPoint from '../components/visualization/DraggableDataPoint';
import DataChart from '../components/statistics/DataChart';

const Visualization = () => {
  const [data, setData] = useState<number[]>([65, 59, 80, 81, 56, 55, 40]);
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

  const moveDataPoint = (fromIndex: number, toIndex: number) => {
    const updatedData = [...data];
    const [movedItem] = updatedData.splice(fromIndex, 1);
    updatedData.splice(toIndex, 0, movedItem);
    setData(updatedData);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="min-h-screen bg-lightyellow flex flex-col items-center justify-center pt-20">
        <Navbar />
        <h1 className="text-3xl font-merriweather mb-8">データの可視化ページ</h1>
        <div className="w-3/4 lg:w-1/2 grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {data.map((value, index) => (
            <DraggableDataPoint key={index} index={index} data={value} month={months[index]} moveDataPoint={moveDataPoint} />
          ))}
        </div>
        <p className="text-gray-700 mb-8">
          以下のグラフは学生の成績を月ごとに示しています。データポイントをドラッグアンドドロップで移動させて、リアルタイムでグラフがどのように変化するかを確認してください。
        </p>
        <DataChart data={data} months={months} />
      </div>
    </DndProvider>
  );
};

export default Visualization;
