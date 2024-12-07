import React from 'react';
import Chart from 'react-apexcharts';

export default function DriverRadialChart({
  series,
  labels,
  totalLabel,
  totalValue,
  hollowSize,
  colors,
}) {
  let seriesModi;
  const options = {
    chart: {
      height: 280,
      type: 'radialBar',
    },
    plotOptions: {
      radialBar: {
        hollow: {
          size: hollowSize || '44%', // Default hollow size if not provided
        },
        dataLabels: {
          name: {
            fontSize: '16px',
          },
          value: {
            fontSize: '14px',
            formatter: function (value) {
              console.log(value);
              return totalLabel === 'Cibil/Risk'
                ? ((value / 100) * 900).toFixed(0)
                : value;
            },
            color: '#fff',
          },
          total: {
            show: true,
            label: totalLabel || 'Total', // Dynamic total label
            formatter: function () {
              return totalValue;
            },
            color: '#fff',
            fontSize: '1.2rem',
            fontWeight: '400',
            fontFamily: 'Poppins',
          },
        },
        track: {
          show: true,
          background: '#e7e7e7',
          strokeWidth: '97%',
          opacity: 1,
          margin: 5, // margin is in pixels
        },
        max: Math.max(...series), // Set max to the maximum value in series
      },
    },
    colors: colors || [],
    labels: labels || [], // Dynamic labels for radial bars
  };

  if (totalLabel === 'Cibil/Risk')
    seriesModi = series.map((val) => +((val / 900) * 100).toFixed(2));
  else seriesModi = series;

  // console.log(seriesModi);
  return (
    <div>
      <Chart
        options={options}
        series={seriesModi}
        type="radialBar"
        height={280}
      />
    </div>
  );
}
