import React from 'react';
import DriverAreaChart from '../Graphs/DriverAreaChart';

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

export default function RunKMsTrends({ runKm }) {
  // Data for the first chart (Days Late / Early)

  // Data for the second chart (Distance Ridden)
  const yAxisData2 = [
    runKm.thirdLastRunKm,
    runKm.secondLastRunKm,
    runKm.lastRunKm,
  ];
  const series2 = [{ name: 'Distance Ridden (KM)', data: yAxisData2 }];
  const xCategories2 = getLast3Months(); // Assuming this function is defined

  return (
    <DriverAreaChart
      series={series2}
      xCategories={xCategories2}
      title="Driver Ride Distance Over Last 3 Months"
      yAxisTitle="Distance Ridden (KM)"
      chartColor="#1E90FF"
      chartHeight={330}
      unit={'kms'}
    />
  );
}
