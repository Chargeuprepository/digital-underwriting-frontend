import DynamicDriverBarChart from '../Graphs/DynamicDriverBarChart';

export default function RunKMsTrends() {
  return (
    <DynamicDriverBarChart
      title="Run KMs Comparison Over 6 Months"
      xCategories={['Month 1', 'Month 2', 'Month 3']}
      yTitle="Run KMs"
      initialData={[300, 400, 300]}
      latestData={[800, 900, 1100]}
      initialColor="#ff8645"
      latestColor="#913dff"
      dataUnit="KMs"
    />
  );
}
