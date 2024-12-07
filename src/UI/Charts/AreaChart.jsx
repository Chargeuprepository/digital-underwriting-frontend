import Chart from 'react-apexcharts';
import styled from 'styled-components';
import Container from './Container';

const Heading = styled.div`
  font-size: 1.4rem;
  font-weight: 700;
  letter-spacing: 0.6px;
  text-transform: uppercase;
  color: var(--color-gray-700);
  padding: 2rem 0rem 0rem 1rem;
`;

// const dummySeries = [
//   {
//     name: 'Active',
//     data: [51, 242, 392, 533],
//     color: '#1e90ff',
//   },
//   {
//     name: 'Churned',
//     data: [0, 5, 26, 44],
//     color: '#32cd32',
//   },
// ];

export default function AreaChart({ heading, series, churnedDriversData }) {
  const options = {
    chart: {
      type: 'area',
      height: 350,
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
    },
    // title: {
    //   text: 'RETENTION RATE',
    //   style: {
    //     fontFamily: 'Poppins, sans-serif',
    //     fontSize: '14px',
    //     fontWeight: 700,
    //     color: 'var(--color-gray-700)',
    //   },
    // },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'smooth',
    },
    colors: ['#1E90FF', '#32CD32'],
    xaxis: {
      // type: 'datetime',
      categories: [
        churnedDriversData[0].month,
        churnedDriversData[1].month,
        churnedDriversData[2].month,
        churnedDriversData[3].month,
        churnedDriversData[4].month,
        churnedDriversData[5].month,
      ],
      labels: {
        style: {
          colors: 'var(--color-gray-400)',
          fontSize: '11px',
          fontWeight: 500,
          fontFamily: 'Poppins, sans-serif',
        },
      },
      tooltip: {
        enabled: false,
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: 'var(--color-gray-400)',
          fontSize: '11px',
          fontWeight: 500,
          fontFamily: 'Poppins, sans-serif',
        },
      },
      title: {
        text: 'Drivers',
        style: {
          color: 'var(--color-gray-700)',
          fontSize: '14px',
          fontFamily: 'Poppins, sans-serif',
          fontWeight: 600,
        },
      },
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
      },
    },
    tooltip: {
      x: {
        format: 'dd/MM/yy HH:mm',
      },
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
        // fillColors: colors,
      },
    },
    grid: {
      borderColor: 'var(--color-gray-25)', // Custom grid line color
    },
  };

  return (
    <Container>
      <Heading>{heading}</Heading>
      <Chart options={options} series={series} type="area" height={'90%'} />
    </Container>
  );
}
