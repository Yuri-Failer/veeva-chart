import {
  Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis,
} from 'recharts';
import { useSelector } from 'react-redux';
import { getPreparedRechartsData, getSortedData } from './utils';

export default function BarGraph() {
  const rawData = useSelector((state) => state.chart.data);
  const sortedData = getSortedData(rawData);
  const colors = ['#00487b', '#5e98cf', '#494D8E', '#D74C7E', '#AF4B90', '#EB5C44', '#F6971C', '#FC7544'];
  // Prepare data.
  const data = getPreparedRechartsData(sortedData, 'Total Gross NBRx');
  return (
    <ResponsiveContainer height={300} width="100%">
      <BarChart
        width={900}
        height={550}
        layout="vertical"
        data={data}
      >
        <XAxis hide type="number" />
        <YAxis hide dataKey="name" type="category" />
        <Tooltip />
        { Object.keys(data[0]).filter((key) => key !== 'name').map(
          (dataKey) => <Bar key={dataKey} dataKey={dataKey} fill={colors.shift()} />,
        )}
      </BarChart>
    </ResponsiveContainer>
  );
}
