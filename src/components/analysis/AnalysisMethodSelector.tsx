import React from 'react';
import Tooltip from '../common/Tooltip';

interface AnalysisMethodSelectorProps {
  selectedMethod: string;
  setSelectedMethod: React.Dispatch<React.SetStateAction<string>>;
}

const AnalysisMethodSelector: React.FC<AnalysisMethodSelectorProps> = ({ selectedMethod, setSelectedMethod }) => {
  const methodDescriptions: { [key: string]: string } = {
    correlation: '相関分析: 2つの変数間の関係を測定します。',
    crosstab: 'クロス集計: データのカテゴリー間の関係を分析します。',
    hypothesis: '仮説検定: 仮説の検証を行います。',
  };

  return (
    <div className="mb-4">
      <h2 className="text-xl font-roboto mb-2">
        分析手法の選択
        <Tooltip text="使用するデータ分析手法を選択してください。">
          <span className="ml-2 text-gray-500 cursor-pointer group">?</span>
        </Tooltip>
      </h2>
      <select
        onChange={(e) => setSelectedMethod(e.target.value)}
        value={selectedMethod}
        className="p-2 border border-gray-300 rounded mb-2 w-full"
      >
        <option value="correlation">相関分析</option>
        <option value="crosstab">クロス集計</option>
        <option value="hypothesis">仮説検定</option>
      </select>
      <div className="mt-2 text-gray-700">
        {methodDescriptions[selectedMethod]}
      </div>
    </div>
  );
};

export default AnalysisMethodSelector;
