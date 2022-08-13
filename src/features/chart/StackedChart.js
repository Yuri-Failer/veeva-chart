import {
  Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis,
} from 'recharts';
import { useSelector } from 'react-redux';
import { getSortedData } from './utils';

export default function StackedChart() {
  // 1. Get data.
  const rawData = useSelector((state) => state.chart.data);
  // 2. Sort data
  const sortedData = getSortedData(rawData);

  // 3. Prepare data for recharts.
  const rechartsData = [];
  const grossData = {};
  const colors = ['#00487b', '#5e98cf', '#494D8E', '#D74C7E', '#AF4B90', '#EB5C44', '#F6971C', '#FC7544'];
  sortedData.forEach((item) => {
    grossData[item.name] = item.value;
  });
  grossData.name = 'Total Gross NBRx';
  rechartsData.push(grossData);
  return (
    <ResponsiveContainer height={50} width="100%">
      <BarChart
        width={900}
        height={550}
        layout="vertical"
        data={rechartsData}
        stackOffset="expand"
        className="ddd"
      >
        <XAxis hide type="number" />
        <YAxis hide dataKey="name" type="category" />
        <Tooltip />
        { Object.keys(rechartsData[0]).filter((key) => key !== 'name').map(
          (dataKey) => <Bar key={dataKey} dataKey={dataKey} fill={colors.shift()} stackId="a" />,
        )}
      </BarChart>
    </ResponsiveContainer>
  );
}
