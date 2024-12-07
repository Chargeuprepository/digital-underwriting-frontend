import DynamicDriverBarChart from '../Graphs/DynamicDriverBarChart';

const getLast3Months = () => {
  const monthNames = [];
  const currentDate = new Date();

  for (let i = 1; i <= 3; i++) {
    // Calculate the month index for the past months
    const monthIndex = (currentDate.getMonth() - i + 12) % 12;
    // Get abbreviated month name
    const monthName = new Date(2023, monthIndex).toLocaleString('default', {
      month: 'short',
    });
    monthNames.unshift(monthName); // Add to the start of the array
  }

  return monthNames;
};

export default function EarningTrends({ earnings }) {
  return (
    <DynamicDriverBarChart
      title="Earnings Trends Over last 3 Months"
      xCategories={getLast3Months()}
      yTitle="Income"
      // initialData={[300, 400, 300]}
      latestData={[
        earnings.thirdLastEarning,
        earnings.secondLastEarning,
        earnings.lastEarning,
      ]}
      // initialColor="#00777e"
      latestColor="#00777e"
      dataUnit="₹"
    />
  );
}
