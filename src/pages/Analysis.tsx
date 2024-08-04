import React, { useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Navbar from '../components/common/Navbar';
import DataTable from '../components/analysis/DataTable';
import DataAnalysisChart from '../components/analysis/DataAnalysisChart';
import AnalysisMethodSelector from '../components/analysis/AnalysisMethodSelector';
import ExplanationCarousel from '../components/analysis/ExplanationCarousel';
import CorrelationAnalysis from '../components/analysis/CorrelationAnalysis';
import CorrelationExplanation from '../components/analysis/CorrelationExplanation';
import 'animate.css/animate.min.css'; // 修正したインポートパス

const Analysis = () => {
  const [data, setData] = useState([
    { id: 1, category: 'A', value: 10 },
    { id: 2, category: 'B', value: 20 },
    { id: 3, category: 'C', value: 30 },
  ]);
  const [selectedMethod, setSelectedMethod] = useState('correlation');

  const correlation = 0.8; // 仮の相関係数

  return (
    <div className="min-h-screen bg-lightyellow flex flex-col items-center justify-center pt-20">
      <Navbar />
      <h1 className="text-3xl font-merriweather mb-8">データ分析</h1>
      <div className="w-3/4 lg:w-1/2 bg-white p-8 rounded shadow mb-8">
        <ExplanationCarousel />
      </div>
      <div className="w-3/4 lg:w-1/2 bg-white p-8 rounded shadow mb-8">
        <TransitionGroup>
          <CSSTransition key="table" timeout={500} classNames="fade">
            <div>
              <DataTable data={data} setData={setData} />
            </div>
          </CSSTransition>
          <CSSTransition key="selector" timeout={500} classNames="fade">
            <div>
              <AnalysisMethodSelector selectedMethod={selectedMethod} setSelectedMethod={setSelectedMethod} />
            </div>
          </CSSTransition>
          <CSSTransition key="chart" timeout={500} classNames="fade">
            <div>
              {selectedMethod === 'correlation' && (
                <>
                  <CorrelationAnalysis data={data} />
                  <CorrelationExplanation correlation={correlation} />
                </>
              )}
              {selectedMethod !== 'correlation' && <DataAnalysisChart data={data} method={selectedMethod} />}
            </div>
          </CSSTransition>
        </TransitionGroup>
      </div>
    </div>
  );
};

export default Analysis;
