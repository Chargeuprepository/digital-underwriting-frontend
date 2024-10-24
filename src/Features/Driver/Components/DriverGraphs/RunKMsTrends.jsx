import React from 'react';
import DriverAreaChart from '../Graphs/DriverAreaChart';

const getLast6Months = () => {
  const monthNames = [];
  const currentDate = new Date();

  for (let i = 0; i < 6; i++) {
    // Get the month index
    const monthIndex = (currentDate.getMonth() - i + 12) % 12;
    // Get abbreviated month name
    const monthName = currentDate.toLocaleString('default', {
      month: 'short',
    });
    monthNames.unshift(monthName); // Add to the start of the array
    currentDate.setMonth(currentDate.getMonth() - 1); // Move to the previous month
  }

  return monthNames;
};

export default function RunKMsTrends() {
  // Data for the first chart (Days Late / Early)

  // Data for the second chart (Distance Ridden)
  const yAxisData2 = [200, 300, 400, 350, 400, 600];
  const series2 = [{ name: 'Distance Ridden (KM)', data: yAxisData2 }];
  const xCategories2 = getLast6Months(); // Assuming this function is defined

  return (
    <DriverAreaChart
      series={series2}
      xCategories={xCategories2}
      title="Driver Ride Distance Over Last 6 Months"
      yAxisTitle="Distance Ridden (KM)"
      chartColor="#1E90FF"
      chartHeight={330}
      unit={'kms'}
    />
  );
}
