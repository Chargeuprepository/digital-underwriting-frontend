import React from 'react';
import Chart from 'react-apexcharts';
import { StyledGraphContainer } from '../DriverGraphs';

export default function DriverAreaChart({
  series,
  xCategories,
  title,
  yAxisTitle,
  chartColor,
  chartHeight,
  unit,
}) {
  // Calculate average of the Y-axis values
  const averageValue =
    series[0].data.reduce((acc, val) => acc + +val, 0) / series[0].data.length;

  const options = {
    chart: {
      type: 'area',
      height: chartHeight,
      toolbar: {
        tools: {
          download: false,
          selection: false,
          pan: false,
          zoomin: true, // Enable zoom in button
          zoomout: true, // Enable zoom out button
          reset: false, // Enable reset zoom button
          zoom: false,
        },
      },
      zoom: {
        enabled: true,
        autoScaleYaxis: false, // Automatically scale Y-axis when zooming
      },
      // toolbar: {
      //   show: true,
      // },
      offsetY: 6,
    },
    stroke: {
      curve: 'smooth', // Smooth area
      width: 2,
      colors: [chartColor], // Use the passed color for the area
    },
    dataLabels: {
      enabled: false,
    },
    fill: {
      type: 'solid',
      opacity: 0.4, // Adjust the opacity for the area fill
    },
    xaxis: {
      tickAmount: 7,
      categories: xCategories, // Set dynamic categories here
      title: {
        text: 'Months',
        style: {
          fontSize: '14px',
          fontWeight: 600,
          fontFamily: 'Poppins',
          color: 'var(--color-gray-50)',
        },
      },
      labels: {
        style: {
          fontSize: '12px',
          fontWeight: 500,
          fontFamily: 'Poppins',
          colors: 'var(--color-gray-100)',
        },
      },
      axisBorder: {
        show: true,
        color: 'var(--color-gray-300)',
      },
      axisTicks: {
        show: true,
        color: 'var(--color-gray-300)',
      },
    },

    yaxis: {
      title: {
        text: yAxisTitle,
        style: {
          fontSize: '13px',
          fontWeight: 500,
          fontFamily: 'Poppins',
          color: 'var(--color-gray-100)',
        },
        offsetX: -6,
      },
      labels: {
        style: {
          fontSize: '11px',
          fontWeight: 400,
          fontFamily: 'Poppins',
          colors: 'var(--color-gray-100)',
        },
      },
      axisBorder: {
        show: true,
        color: '#777',
      },
      axisTicks: {
        show: true,
        color: '#777',
      },
    },
    tooltip: {
      theme: 'dark',
      style: {
        fontSize: '12px',
        fontWeight: 500,
        fontFamily: 'Poppins, sans-serif',
      },
      y: {
        formatter: function (val) {
          return `${val}`; // Show data unit
        },
      },
    },
    grid: {
      borderColor: 'var(--color-brand-blue-200)',
      strokeDashArray: 1,
      xaxis: {
        lines: {
          show: true,
        },
      },
      yaxis: {
        lines: {
          show: true,
        },
      },
    },
    annotations: {
      yaxis: [
        {
          y: averageValue, // Use calculated average value
          borderColor: '#FF4560',
          label: {
            borderColor: '#FF4560',
            style: {
              color: '#fff',
              background: '#FF4560',
            },
            text: `Average: ${averageValue.toFixed(2) + unit}`,
          },
        },
      ],
    },
    title: {
      text: title,
      align: 'center',
      style: {
        fontSize: '18px',
        fontWeight: 600,
        fontFamily: 'Poppins',
        color: 'var(--color-gray-50)',
      },
      offsetY: 14,
    },
    responsive: [
      {
        breakpoint: 600,
        options: {
          chart: {
            height: 300,
          },
        },
      },
    ],
  };

  return (
    <StyledGraphContainer style={{ padding: '1rem 2.4rem 0 1.5rem' }}>
      <Chart
        options={options}
        series={series}
        type="area"
        height={chartHeight}
      />
    </StyledGraphContainer>
  );
}
