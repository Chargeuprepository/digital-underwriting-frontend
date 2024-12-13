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

export default function EarningTrends({ earningVsExpense }) {
  const { earningInformation, expenseInformation } = earningVsExpense;
  return (
    <DynamicDriverBarChart
      title="Expense VS Earning: Last 3 Months"
      xCategories={getLast3Months()}
      yTitle="Income"
      expenseData={[
        expenseInformation.thirdLastExpense,
        expenseInformation.secondLastExpense,
        expenseInformation.lastExpense,
      ]}
      earningData={[
        earningInformation.thirdLastEarning,
        earningInformation.secondLastEarning,
        earningInformation.lastEarning,
      ]}
      expenseColor="#f8782e"
      earningColor="#8015e4"
      dataUnit="₹"
    />
  );
}
