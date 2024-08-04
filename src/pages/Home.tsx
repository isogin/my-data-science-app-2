import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/common/Navbar';

const Home = () => {
  return (
    <div className="bg-lightyellow min-h-screen flex flex-col items-center justify-center">
      <Navbar />
      <main className="flex flex-col items-center justify-center flex-1 mt-16">
        <h1 className="text-5xl font-poppins text-purple mb-8">Welcome to Data Science App</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Link to="/visualization" className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
            <h2 className="text-2xl font-roboto text-gray-900">データの可視化</h2>
            <p className="text-gray-600">データを視覚的に理解しよう</p>
          </Link>
          <Link to="/statistics" className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
            <h2 className="text-2xl font-roboto text-gray-900">統計の基礎</h2>
            <p className="text-gray-600">統計指標の基本を学ぼう</p>
          </Link>
          <Link to="/preprocessing" className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
            <h2 className="text-2xl font-roboto text-gray-900">データの前処理</h2>
            <p className="text-gray-600">データのクリーニングと準備</p>
          </Link>
          <Link to="/analysis" className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
            <h2 className="text-2xl font-roboto text-gray-900">データ分析の基本</h2>
            <p className="text-gray-600">データから洞察を得る</p>
          </Link>
          <Link to="/simulation" className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
            <h2 className="text-2xl font-roboto text-gray-900">データシミュレーション</h2>
            <p className="text-gray-600">統計的データを生成しよう</p>
          </Link>
          <Link to="/quiz" className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
            <h2 className="text-2xl font-roboto text-gray-900">クイズ</h2>
            <p className="text-gray-600">データサイエンスを学ぶためのクイズに挑戦しよう</p>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Home;
