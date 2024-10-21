import React from 'react';
import Chart from 'react-apexcharts';
import { StyledGraphContainer } from '../DriverGraphs';

export default function PaymentTrends() {
  // Y-axis data values
  const yAxisData = [
    -22, 9, 3, -4, 0, -1, 13, 0, 8, 10, -3, 4, 26, 2, 5, -19, 7, -5, 9, 0, 4,
    -2, 6, 30,
  ];

  // Calculate average of the Y-axis values
  const averageValue =
    yAxisData.reduce((acc, val) => acc + val, 0) / yAxisData.length;

  const options = {
    chart: {
      type: 'area',
      offsetY: 14,
      //   background: '#f4f4f4', // Set chart background color
      toolbar: {
        tools: {
          download: false,
          selection: false,
          pan: false,
          reset: false,
          zoomin: true,
          zoomout: true,
          customIcons: [], // Remove unwanted icons
        },
      },
    },
    xaxis: {
      categories: Array.from({ length: 24 }, (_, i) => i + 1), // X-axis labels from 1 to 24
      title: {
        text: 'EMIs',
        offsetY: 2,
        style: {
          fontSize: '14px',
          fontWeight: 600,
          fontFamily: 'Poppins',
          color: 'var(--color-gray-10)',
        },
      },
      tickAmount: 7,
      labels: {
        // formatter: function (val, index) {
        //   // Display only a subset of labels
        //   return index % 4 === 0 ? val : ''; // Show every 4th label
        // },
        style: {
          fontFamily: 'Poppins',
          fontSize: '12px',
          colors: 'var(--color-gray-50)', // X-axis labels color
        },
      },
      axisBorder: {
        show: true,
        color: '#8b8b8b', // X-axis border color
      },
      axisTicks: {
        show: true,
      },
    },
    yaxis: {
      min: -30,
      max: 30,
      title: {
        text: 'Days',
        offsetX: 8,
        style: {
          fontFamily: 'Poppins',
          fontSize: '14px',
          fontWeight: 600,
          color: 'var(--color-gray-50)', // Y-axis title color
        },
      },
      labels: {
        style: {
          fontSize: '12px',
          fontFamily: 'Poppins',
          colors: 'var(--color-gray-100)', // Y-axis labels color
        },
      },
      axisBorder: {
        show: true,
        color: 'var(--color-gray-300)', // Y-axis border color
      },
      axisTicks: {
        show: false,
        color: '#777', // Y-axis ticks color
      },
    },
    dataLabels: {
      enabled: false, // Disable data labels on the chart
    },
    stroke: {
      curve: 'smooth', // Smooth the curve for the area chart
      width: 4, // Stroke width
      colors: ['#00BAEC'], // Stroke color
    },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        inverseColors: true,
        opacityFrom: 0.7,
        opacityTo: 0.3,
        stops: [0, 90, 100],
      },
    },
    markers: {
      size: 0, // Marker size
      colors: ['#FF4560'], // Marker color
      strokeColors: '#fff', // Border color around the marker
      strokeWidth: 2,
      hover: {
        sizeOffset: 3, // Marker size increases on hover
      },
    },
    tooltip: {
      theme: 'dark', // Dark-themed tooltip
      style: {
        fontSize: '12px',
        fontFamily: 'Poppins, sans-serif',
      },
      y: {
        formatter: function (val) {
          return `${val} Days`; // Tooltip format for displaying days
        },
      },
    },
    grid: {
      borderColor: 'var(--color-brand-blue-200)', // Grid border color
      strokeDashArray: 1, // Dashed lines for the grid
      xaxis: {
        lines: {
          show: true, // Show grid lines on the X-axis
        },
      },
      yaxis: {
        lines: {
          show: true, // Show grid lines on the Y-axis
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
            text: `Average: ${averageValue.toFixed(2)} Days`,
          },
        },
      ],
    },
    plotOptions: {
      area: {
        fillTo: 'origin', // Ensure fill from line to the axis
      },
    },
    title: {
      text: 'EMI Days Late / Early',
      align: 'center',
      offsetY: 10,
      style: {
        fontSize: '18px',
        fontWeight: 600,
        fontFamily: 'Poppins',
        color: 'var(--color-gray-50)',
      },
    },
    legend: {
      show: true,
      position: 'top', // Legend position
      labels: {
        colors: '#333', // Legend labels color
      },
      fontSize: '14px', // Legend font size
    },
  };

  // Data series
  const series = [
    {
      name: 'Days Late / Early',
      data: yAxisData, // Data for Y-axis
    },
  ];

  return (
    <StyledGraphContainer style={{ padding: '1rem 2.2rem 0 0.4rem' }}>
      <Chart options={options} series={series} type="area" height={320} />
    </StyledGraphContainer>
  );
}
