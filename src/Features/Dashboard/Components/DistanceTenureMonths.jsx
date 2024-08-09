import { useState } from 'react';
import Chart from 'react-apexcharts';
import styled from 'styled-components';

const Heading = styled.div`
  text-transform: uppercase;
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--color-gray-700);
  padding-left: 1rem;
`;
const DistanceTenureMonthsContainer = styled.div`
  grid-column: 1 / 3;
  grid-row: 2;
  border-radius: 1rem;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  padding: 2rem 1.5rem 2rem 1rem;
  align-self: center;
  height: 30.8rem;
  /* background: radial-gradient(circle, #1e1c1c, #323534, #6a696f); */
  background: linear-gradient(
    to left,
    var(--color-gray-50),
    var(--color-gray-0)
  );
  /* background: var(--color-gray-0); */
  transition: transform 0.6s ease;

  &:hover {
    transform: scale(1.04);
  }
`;

export default function DistanceTenureMonths() {
  const [colors, setColors] = useState(['#8B7765', '#CD853F', '#F4A460']);

  const options = {
    chart: {
      type: 'bar',
      toolbar: {
        show: false,
      },
    },
    animations: {
      enabled: true,
      easing: 'easeinout',
      speed: 800,
      animateGradually: {
        enabled: true,
        delay: 150,
      },
      dynamicAnimation: {
        enabled: true,
        speed: 350,
      },
    },
    xaxis: {
      categories: ['0-20', '21-40', '41-60', '61-80', '>80km'],
      labels: {
        show: true,
        hideOverlappingLabels: true,
        showDuplicates: false,
        trim: true,
        style: {
          colors: 'var(--color-gray-500)',
          fontSize: '10px',
          fontFamily: 'Poppins, sans-serif',
          fontWeight: 500,
        },
      },
      axisBorder: {
        show: true,
        color: 'var(--color-gray-100)',
        height: 1,
        width: '100%',
        offsetX: 0,
        offsetY: 0,
      },
      axisTicks: {
        show: true,
        borderType: 'solid',
        color: 'var(--color-gray-100)',
        height: 5,
        offsetX: 0,
        offsetY: 0,
      },
      tooltip: {
        enabled: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '70%',
        endingShape: 'rounded',
      },
    },
    stroke: {
      show: true,
      width: 0.5,
      colors: ['transparent'],
    },
    yaxis: {
      show: true,
      labels: {
        show: true,
        style: {
          colors: 'var(--color-gray-500)',
          fontSize: '11px',
          fontFamily: 'Poppins, sans-serif',
          fontWeight: 500,
          cssClass: 'apexcharts-yaxis-label',
        },
      },
      axisBorder: {
        show: true,
        color: 'var(--color-gray-100)',
      },
      axisTicks: {
        show: true,
        borderType: 'solid',
        color: 'var(--color-gray-100)',
        width: 4,
      },
      title: {
        text: 'Values',
        style: {
          color: 'var(--color-gray-600)',
          fontSize: '14px',
          fontFamily: 'Poppins, sans-serif',
          fontWeight: 600,
        },
      },
    },
    fill: {
      type: 'gradient',
      colors: colors,
    },
    legend: {
      show: true,
      fontSize: '12px',
      fontFamily: 'Poppins, Arial',
      fontWeight: 500,
      itemMargin: {
        horizontal: 8,
        vertical: 4,
      },
      onItemClick: {
        toggleDataSeries: true,
      },
      onItemHover: {
        highlightDataSeries: true,
      },
      markers: {
        show: true,
        fillColors: colors,
      },
    },
    dataLabels: {
      enabled: false,
    },
    tooltip: {
      enabled: true,
      shared: true,
      intersect: false,
      style: {
        fontSize: '11px',
        fontFamily: 'Poppins, sans-serif',
        backgroundColor: 'var(--color-gray-25)',
      },
      marker: {
        show: true,
        fillColors: colors,
      },
      y: {
        formatter: (value) => {
          // Format tooltips as percentages
          return `${value}%`;
        },
      },
    },
    grid: {
      borderColor: 'var(--color-gray-50)',
    },
  };

  const series = [
    {
      name: 'May',
      data: ['19%', '10%', '14%', '16%', '41%'],
    },
    {
      name: 'June',
      data: ['9%', '11%', '23%', '27%', '29%'],
    },
    {
      name: 'July',
      data: ['8%', '12%', '20%', '24%', '37%'],
    },
  ];

  return (
    <DistanceTenureMonthsContainer>
      <Heading>Monthly Driving Trends(KM/DAY)</Heading>
      <Chart options={options} series={series} type="bar" height={'100%'} />
    </DistanceTenureMonthsContainer>
  );
}
