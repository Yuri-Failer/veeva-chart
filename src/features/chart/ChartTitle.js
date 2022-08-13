import React from 'react';
import { useSelector } from 'react-redux';
import { formatNumber } from './utils';

function ChartTitle() {
  const chartTitle = useSelector((state) => state.chart.chartTitle);
  const rawData = useSelector((state) => state.chart.data);
  let total = 0;
  rawData.forEach((item) => {
    total += parseInt(item.value, 10);
  });
  total = formatNumber(total);
  return (
    <div className="text-left">{chartTitle}<span className="font-bold ml-1">{total}</span></div>
  );
}

export default ChartTitle;
