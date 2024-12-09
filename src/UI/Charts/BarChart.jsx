import React from 'react';
import ApexCharts from 'react-apexcharts';
import styled from 'styled-components';
import Container from './Container';
import Heading from './Heading';

const data1 = {
  heading: 'Bar Chart',
  direction: 'vertical',
  height: '100%',
  width: '80%',
  total: 1000,
  data: [
    { label: 'Jan', value: 40 },
    { label: 'Feb', value: 60 },
    { label: 'Mar', value: 80 },
    { label: 'Apr', value: 90 },
  ],
};

const StyledBar = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function BarChart({
  data = data1.data,
  direction = data1.direction,
  format,
  heading = data1.heading,
  height = data1.height,
  width = data1.width,
  total,
  colors,
  labelSize,
}) {
  const chartOptions = {
    chart: {
      type: 'bar',
      toolbar: {
        show: false,
      },
    },
    legend: {
      show: false,
    },
    // colors: colors,
    fill: {
      type: 'gradient',
      colors,
    },
    plotOptions: {
      bar: {
        horizontal: direction === 'horizontal',
        barHeight: '60%',
        columnWidth: '85%',
        distributed: true,
      },
    },
    dataLabels: {
      enabled: true,
      formatter: function (val) {
        return format === '%' ? `${((val * 100) / total).toFixed(0)}%` : val;
      },
      style: {
        fontSize: '12px',
        fontFamily: 'Poppins, sans-serif',
        colors: ['var(--color-gray-10)'],
      },
    },
    tooltip: {
      enabled: true,
      theme: 'dark',
      style: {
        fontFamily: 'Poppins, sans-serif',
        fontSize: '14px',
        color: 'var(--color-gray-900)',
      },
      title: {
        fontSize: '16px',
        fontFamily: 'Arial',
        fontWeight: 'bold',
        color: '#ffcc00',
      },
    },
    // title: {
    //   text: `${title}`,
    //   align: 'center',
    //   margin: 20,
    //   offsetX: 0,
    //   offsetY: 0,
    //   style: {
    //     fontSize: '20px',
    //     fontWeight: 600,
    //     color: 'var(--color-gray-700)',
    //     fontFamily: 'Poppins, sans-serif',
    //   },
    // },
    xaxis: {
      categories: data.map((item) => item.label),
      labels: {
        style: {
          fontSize: labelSize,
          fontFamily: 'Poppins, sans-serif',
          colors: 'var(--color-gray-600)',
          fontWeight: 500,
        },
        offsetY: -2,
        show: direction !== 'horizontal',
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      show: direction !== 'horizontal',
    },
    yaxis: {
      labels: {
        style: {
          fontSize: '14px',
          fontFamily: 'Poppins, sans-serif',
          colors: 'var(--color-gray-600)',
          fontWeight: 500,
        },
        offsetX: 4,
        show: direction !== 'vertical',
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      show: direction !== 'vertical', // Hide y-axis when direction is vertical
    },
    grid: {
      borderColor: '#f1f1f1',
      strokeDashArray: 0,
      row: {
        colors: undefined,
        distributed: true,
        opacity: 0.5,
      },
      column: {
        colors: undefined,
        opacity: 0.5,
      },
      xaxis: {
        lines: {
          show: false,
        },
      },
      yaxis: {
        lines: {
          show: false,
        },
      },
    },
  };

  const chartSeries = [
    {
      name: 'Values',
      data: data.map((item) => item.value),
    },
  ];

  return (
    <StyledBar>
      <Heading>{heading}</Heading>
      <Container>
        <ApexCharts
          options={chartOptions}
          series={chartSeries}
          type="bar"
          height={height}
          width={width}
        />
      </Container>
    </StyledBar>
  );
}
