// import React from 'react';
// import Chart from 'react-apexcharts';

// const RadialChart = () => {
//   const options = {
//     chart: {
//       height: 280,
//       type: 'radialBar',
//     },
//     plotOptions: {
//       radialBar: {
//         hollow: {
//           size: '44%', // Adjust hollow size if needed
//         },
//         dataLabels: {
//           name: {
//             fontSize: '16px',
//           },
//           value: {
//             fontSize: '14px',
//             formatter: function (value) {
//               return (value / 100) * 900; // Show raw value directly
//             },
//             color: '#fff',
//           },
//           total: {
//             show: true,
//             label: 'Cibil/Risk/Social',
//             formatter: function () {
//               return '900';
//             },
//             color: '#fff',
//             fontSize: '1.2rem',
//             fontWeight: '400',
//             fontFamily: 'Poppins',
//           },
//         },
//         track: {
//           show: true,
//           background: '#e7e7e7',
//           strokeWidth: '97%',
//           opacity: 1,
//           margin: 5, // margin is in pixels
//         },
//         max: 900, // Set max to 900 for all radial bars
//       },
//     },
//     labels: ['Cibil', 'Risk', 'Social'], // Labels for each radial bar
//   };

//   const series1 = [890, 400, 800]; // Raw values from 900
//   const series2 = series1.map((val) => ((val / 900) * 100).toFixed());

//   return (
//     <div>
//       <Chart options={options} series={series2} type="radialBar" height={280} />
//     </div>
//   );
// };

// export default RadialChart;

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
              return totalLabel === 'Cibil/Risk/Social'
                ? (value / 100) * 900
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

  if (totalLabel === 'Cibil/Risk/Social')
    seriesModi = series.map((val) => ((val / 900) * 100).toFixed());
  else seriesModi = series;
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
