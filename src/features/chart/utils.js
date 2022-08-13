export function formatNumber(num) {
  // Standards are not provided. It can be written without nested ternary
  // eslint-disable-next-line no-nested-ternary
  return Math.abs(Number(num)) >= 1.0e+6
    ? `${(Math.abs(Number(num)) / 1.0e+6).toFixed(1)}M`
  // Three Zeroes for Thousands
    : Math.abs(Number(num)) >= 1.0e+3
      ? `${Math.round(Math.abs(Number(num)) / 1.0e+3)}K`
      : Math.abs(Number(num));
}

// Desc sort. Returns new array (no mutating data).
export function getSortedData(data) {
  // Can be improved with additional params like ASC/DESC order and sorting by key.
  return [...data].sort((a, b) => parseInt(b.value, 10) - parseInt(a.value, 10));
}

export function getPreparedRechartsData(data, chartName) {
  // Can be more generic by requirements.
  const chartData = { name: chartName };
  data.forEach((item) => {
    chartData[item.name] = item.value;
  });
  return Array(chartData);
}
