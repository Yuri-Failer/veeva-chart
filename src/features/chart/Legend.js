import { useSelector } from 'react-redux';
import { formatNumber, getSortedData } from './utils';
import styles from './chart.module.css';

export default function Legend() {
  const chartData = useSelector((state) => state.chart.data);
  const sortedData = getSortedData(chartData);

  return (
    <div className="flex flex-wrap mt-4">
      { sortedData.map((item, index) => (
        <div
          key={item.name}
          className="basis-1/4 border-r-2 [&:nth-child(4)]:border-0 [&:nth-child(8)]:border-0 my-3"
        >
          <div className="text-xl font-bold">
            <div className={`inline-block w-3 h-3 rounded-full ${styles[`colored-item-${index + 1}`]}`} /> { formatNumber(item.value) }
          </div>
          <div className="">{ item.name }</div>
        </div>
      ))}
    </div>
  );
}
