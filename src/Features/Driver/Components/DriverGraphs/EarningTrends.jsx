import DynamicDriverBarChart from '../Graphs/DynamicDriverBarChart';

export default function EarningTrends() {
  return (
    <DynamicDriverBarChart
      title="Earnings Comparison Over 3 Months"
      xCategories={['Month 1', 'Month 2', 'Month 3']}
      yTitle="Income"
      initialData={[300, 400, 300]}
      latestData={[800, 900, 1100]}
      initialColor="#ff8645"
      latestColor="#913dff"
      dataUnit="₹"
    />
  );
}
