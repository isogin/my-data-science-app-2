import React, { useState } from 'react';
import Navbar from '../components/common/Navbar';
import ExplanationCarousel from '../components/preprocessing/ExplanationCarousel';
import MissingValueHandler from '../components/preprocessing/MissingValueHandler';
import DataStandardization from '../components/preprocessing/DataStandardization';
import DataPreview from '../components/preprocessing/DataPreview';
import DataChart from '../components/preprocessing/DataChart';

const Preprocessing = () => {
  const [data, setData] = useState<number[]>([65, NaN, 80, 81, 56, NaN, 40]);

  return (
    <div className="min-h-screen bg-lightyellow flex flex-col items-center justify-center pt-20">
      <Navbar />
      <h1 className="text-3xl font-merriweather mb-8">データの前処理</h1>
      <div className="w-3/4 lg:w-1/2 bg-white p-8 rounded shadow mb-8">
        <ExplanationCarousel />
      </div>
      <div className="w-3/4 lg:w-1/2 bg-white p-8 rounded shadow mb-8">
        <DataPreview data={data} />
        <MissingValueHandler data={data} setData={setData} />
        <DataStandardization data={data} setData={setData} />
        <DataChart data={data} />
      </div>
    </div>
  );
};

export default Preprocessing;
