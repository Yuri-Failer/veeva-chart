import {
  Bar, BarChart, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis,
} from 'recharts';
import { useSelector } from 'react-redux';
import { getSortedData } from './utils';

export default function BarGraph() {
  const rawData = useSelector((state) => state.chart.data);
  const sortedData = getSortedData(rawData);
  const data = [];
  const grossData = { name: 'Total Gross NBRx' };
  const colors = ['#00487b', '#5e98cf', '#494D8E', '#D74C7E', '#AF4B90', '#EB5C44', '#F6971C', '#FC7544'];
  sortedData.forEach((item) => {
    grossData[item.name] = item.value;
  });
  data.push(grossData);
  return (
    <ResponsiveContainer height={300} width="100%">
      <BarChart
        width={900}
        height={550}
        layout="vertical"
        data={data}
        stackOffset="expand"
      >
        <XAxis hide type="number" />
        <YAxis hide dataKey="name" type="category" />
        <Tooltip />
        { Object.keys(data[0]).filter((key) => key !== 'name').map((dataKey) => <Bar key={dataKey} dataKey={dataKey} fill={colors.shift()} />)}
      </BarChart>
    </ResponsiveContainer>
  );
}
