import { useSelector } from 'react-redux';

export default function Header() {
  const title = useSelector((state) => state.chart.title);
  const subTitle = useSelector((state) => state.chart.subTitle);
  return (
    <div className="text-left">
      <h1 className="text-lg text-blue-900 font-bold">{title}</h1>
      <div className="text-sm text-gray-400 mb-2">{subTitle}</div>
    </div>
  );
}
