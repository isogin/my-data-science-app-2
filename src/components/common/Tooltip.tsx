import React, { ReactNode } from 'react';

interface TooltipProps {
  text: string;
  children: ReactNode; // childrenプロパティを追加
}

const Tooltip: React.FC<TooltipProps> = ({ text, children }) => {
  return (
    <div className="relative flex items-center group">
      {children}
      <div className="absolute bottom-full mb-2 hidden group-hover:block w-max p-2 bg-gray-700 text-white text-xs rounded">
        {text}
      </div>
    </div>
  );
};

export default Tooltip;
