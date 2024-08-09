import styled from 'styled-components';
import Chart from 'react-apexcharts';

const ChurnedContainer = styled.div`
  grid-column: 5 / -1;
  grid-row: 2;
  border-radius: 1rem;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  padding: 0rem 2rem 3rem 1rem;
  height: 30rem;
  align-self: center;
  transition: transform 0.6s ease;
  background: linear-gradient(
    to right,
    var(--color-gray-0),
    var(--color-gray-50)
  );
  &:hover {
    transform: scale(1.04);
  }
`;
const Heading = styled.div`
  font-size: 1.4rem;
  font-weight: 700;
  letter-spacing: 0.6px;
  text-transform: uppercase;
  color: var(--color-gray-700);
  padding: 2rem 0rem 0rem 1rem;
`;

export default function Churned() {
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
      categories: ['2023 Q2', '2023 Q3', '2023 Q4', '2024 Q1'],
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

  const series = [
    {
      name: 'Active',
      data: [51, 242, 392, 533],
      color: '#1e90ff',
    },
    {
      name: 'Churned',
      data: [0, 5, 26, 44],
      color: '#32cd32',
    },
  ];

  return (
    <ChurnedContainer>
      <Heading>Retention Rate</Heading>
      <Chart options={options} series={series} type="area" height={'90%'} />
    </ChurnedContainer>
  );
}
