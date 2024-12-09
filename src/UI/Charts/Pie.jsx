import React from 'react';
import ApexCharts from 'react-apexcharts';
import styled from 'styled-components';
import Container from './Container';

const StyledPie = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
`;
const Heading = styled.div`
  font-size: 1.6rem;
  font-weight: 700;
  color: var(--color-gray-700);
  text-transform: uppercase;
`;

const labels1 = ['Category A', 'Category B', 'Category C'];
const colors1 = ['#FF4560', '#00E396', '#ba38d7'];
const chartSeries = [44, 55, 304];

export default function Pie({
  labels = labels1,
  colors = colors1,
  series = chartSeries,
  heading = 'Pie Chart',
}) {
  const chartOptions = {
    chart: {
      type: 'pie',
      fontFamily: 'Poppins, sans-serif',
    },
    labels: labels,
    dataLabels: {
      enabled: true,
      formatter: (val) => {
        return `${val.toFixed()}%`; // Format to two decimal places
      },
      style: {
        fontFamily: 'Poppins, sans-serif',
        fontSize: '12px',
        colors: ['var(--color-gray-10)'],
        fontWeight: 500,
      },
    },
    stroke: {
      show: true,
      width: 0.8,
      colors: '#fff',
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: '100%',
          },
          legend: {
            position: 'bottom',
          },
        },
      },
    ],
    legend: {
      offsetX: 45,
      fontFamily: 'Poppins, sans-serif',
      fontSize: '14px',
      fontWeight: 500,
      labels: {
        colors: 'var(--color-gray-500)',
      },
      itemMargin: {
        vertical: 5,
      },
    },
    tooltip: {
      theme: 'dark',
      fontFamily: 'Poppins, sans-serif',
    },
    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: false,
          },
        },
      },
    },
    colors: colors,
  };

  return (
    <StyledPie>
      <Heading>{heading}</Heading>
      <Container>
        <ApexCharts
          options={chartOptions}
          series={series}
          type="pie"
          width="120%"
          height="120%"
        />
      </Container>
    </StyledPie>
  );
}
