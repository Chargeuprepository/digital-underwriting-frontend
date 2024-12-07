import React from 'react';
import Chart from 'react-apexcharts';
import { StyledGraphContainer } from '../DriverGraphs';

export default function DynamicBarChart({
  title,
  xCategories,
  yTitle,
  initialData,
  latestData,
  initialColor,
  latestColor,
  dataUnit,
}) {
  const options = {
    chart: {
      type: 'bar',
      height: 350,
      toolbar: {
        show: false,
      },
      offsetY: 6,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '40%',
        endingShape: 'rounded',
        borderRadius: 3,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent'],
    },
    xaxis: {
      categories: xCategories,
      title: {
        text: 'Last Three Months',
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
        text: yTitle,
        style: {
          fontSize: '13px',
          fontWeight: 500,
          fontFamily: 'Poppins',
          color: 'var(--color-gray-100)',
        },
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
    fill: {
      opacity: 1,
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
          return dataUnit === '₹' ? `${dataUnit + val}` : `${val + dataUnit}`;
        },
      },
    },
    legend: {
      show: true,
      position: 'top',
      horizontalAlign: 'center',
      labels: {
        colors: 'var(--color-gray-200)',
      },
      fontWeight: 500,
      fontFamily: 'Poppins, sans-serif',
      fontSize: '11px',
      itemMargin: {
        horizontal: 14,
        vertical: 2,
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
          legend: {
            position: 'bottom',
          },
        },
      },
    ],
  };

  // Dynamic data series
  const series = [
    // {
    //   name: 'Initial 3 Months',
    //   data: initialData,
    //   color: initialColor,
    // },
    {
      name: 'Latest 3 Months',
      data: latestData,
      color: latestColor,
    },
  ];

  return (
    <StyledGraphContainer style={{ padding: '1rem 2.4rem 0 1rem' }}>
      <Chart options={options} series={series} type="bar" height={330} />
    </StyledGraphContainer>
  );
}
