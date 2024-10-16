// import Chart from 'react-apexcharts';
// import styled from 'styled-components';

// const DonutChartContainer = styled.div`
//   grid-column: 5 / -1;
//   border-radius: 1rem;
//   box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
//   padding: 1rem;
//   transition: transform 0.6s ease;

//   &:hover {
//     transform: scale(1.04);
//   }
// `;
// export const LegendSeries = styled.div`
//   display: flex;
//   align-items: center;
// `;

// export const LegendMarker = styled.span`
//   flex: none; /* Prevent marker from growing */
//   margin-right: 8px; /* Adjust margin between marker and text */
// `;

// export default function RunningKMDonut() {
//   const options = {
//     chart: {
//       type: 'donut',
//       animations: {
//         enabled: true,
//         easing: 'easeinout',
//         speed: 1200,
//       },
//     },
//     plotOptions: {
//       pie: {
//         donut: {
//           size: '75%',
//         },
//       },
//     },
//     title: {
//       text: 'RUNNING KM/DAY',
//       style: {
//         fontSize: '14px', // Font size of the title
//         fontWeight: '700', // Font weight of the title
//         fontFamily: 'Poppins, sans-serif', // Font family of the title
//         color: 'var(--color-gray-700)', // Color of the title
//       },
//     },
//     dataLabels: {
//       enabled: false,
//     },
//     responsive: [
//       {
//         // breakpoint: 200,
//         options: {
//           chart: {
//             // width: 100,
//           },
//           legend: {
//             position: 'center',
//           },
//         },
//       },
//     ],
//     tooltip: {
//       enabled: true,
//       theme: 'dark',
//       style: {
//         fontSize: '1.4rem',
//         fontFamily: 'Poppins, sans-serif',
//       },
//       onDatasetHover: {
//         highlightDataSeries: true,
//       },
//       y: {
//         formatter: function (val) {
//           return `${val}%`;
//         },
//       },
//     },
//     stroke: {
//       show: false,
//     },
//     fill: {
//       type: 'gradient',
//     },

//     legend: {
//       horizontalAlign: 'center',
//       fontSize: '13px',
//       fontFamily: 'Poppins, sans-serif',
//       fontWeight: 500,
//       labels: {
//         colors: 'var(--color-gray-600)',
//         useSeriesColors: false,
//       },
//       itemMargin: {
//         horizontal: 10,
//         vertical: 4,
//       },
//       onItemClick: {
//         toggleDataSeries: true,
//       },
//       onItemHover: {
//         highlightDataSeries: true,
//       },
//     },

//     colors: ['#D32F2F', '#6A1B9A', '#FBC02D', '#1976D2', '#388E3C'],
//     labels: ['0-20km', '21-40km', '41-60km', '61-80km', '>80km'],
//   };

//   const series = [10, 13, 24, 25, 28];

//   return (
//     <DonutChartContainer>
//       <Chart
//         options={options}
//         series={series}
//         type="donut"
//         width="100%"
//         height="100%"
//       />
//     </DonutChartContainer>
//   );
// }
