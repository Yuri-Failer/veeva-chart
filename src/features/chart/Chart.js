import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleChart } from './chartSlice';
import StackedChart from './StackedChart';
import BarGraph from './BarGraph';
import ChartTitle from './ChartTitle';

export default function Chart() {
  const stackedChart = useSelector((state) => state.chart.stackedChart);
  const dispatch = useDispatch();
  return (
    <>
      <ChartTitle />
      {stackedChart
        ? <StackedChart />
        : <BarGraph />}
      <button type="button" className="" onClick={() => dispatch(toggleChart())}> Toggle Chart</button>
    </>
  );
}
