import React from 'react';

interface CorrelationExplanationProps {
  correlation: number;
}

const CorrelationExplanation: React.FC<CorrelationExplanationProps> = ({ correlation }) => {
  let interpretation = '';

  if (correlation > 0.8) {
    interpretation = '強い正の相関があります。';
  } else if (correlation > 0.6) {
    interpretation = '中程度の正の相関があります。';
  } else if (correlation > 0.4) {
    interpretation = '弱い正の相関があります。';
  } else if (correlation > -0.4) {
    interpretation = '相関がほとんどありません。';
  } else if (correlation > -0.6) {
    interpretation = '弱い負の相関があります。';
  } else if (correlation > -0.8) {
    interpretation = '中程度の負の相関があります。';
  } else {
    interpretation = '強い負の相関があります。';
  }

  return (
    <div className="mt-4 text-gray-700">
      <p>相関係数: {correlation.toFixed(2)}</p>
      <p>{interpretation}</p>
    </div>
  );
};

export default CorrelationExplanation;
