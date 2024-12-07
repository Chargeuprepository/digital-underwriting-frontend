import React from 'react';
import DriverAreaChart from '../Graphs/DriverAreaChart';

export default function PaymentTrends(emi) {
  // Data for the first chart (Days Late / Early)

  const yAxisData1 = emi.emi.split(',');
  const series1 = [{ name: 'Days Late / Early', data: yAxisData1 }];
  const xCategories1 = Array.from({ length: 24 }, (_, i) => i + 1); // X-axis labels from 1 to 24
  function calculateAverage(arr) {
    const sum = arr.reduce((acc, value) => acc + value, 0);
    return sum / arr.length;
  }

  // Data for the second chart (Distance Ridden)

  return (
    <DriverAreaChart
      series={series1}
      xCategories={xCategories1}
      title="EMI Days Late / Early"
      yAxisTitle="Days"
      chartColor="#00BAEC"
      chartHeight={330}
      unit={
        calculateAverage(yAxisData1) > 1 || calculateAverage(yAxisData1) < -1
          ? 'days'
          : 'day'
      }
    />
  );
}
