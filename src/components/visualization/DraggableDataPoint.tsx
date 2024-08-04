import React from 'react';
import { useDrag, useDrop } from 'react-dnd';

const ItemTypes = {
  DATA_POINT: 'dataPoint',
};

interface DraggableDataPointProps {
  index: number;
  data: number;
  month: string;
  moveDataPoint: (fromIndex: number, toIndex: number) => void;
}

const DraggableDataPoint = ({ index, data, month, moveDataPoint }: DraggableDataPointProps) => {
  const [, ref] = useDrag({
    type: ItemTypes.DATA_POINT,
    item: { index },
  });

  const [, drop] = useDrop({
    accept: ItemTypes.DATA_POINT,
    hover: (item: { index: number }) => {
      if (item.index !== index) {
        moveDataPoint(item.index, index);
        item.index = index;
      }
    },
  });

  return (
    <div ref={(node) => ref(drop(node))} className="p-2 bg-white rounded shadow cursor-pointer flex items-center justify-between">
      <span>{month}:</span>
      <span>{data}</span>
    </div>
  );
};

export default DraggableDataPoint;
