import Chart from 'react-apexcharts';
import styled from 'styled-components';
import Heading from './Heading';
import Container from './Container';

const StyledDonut = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  /* border-radius: 1rem;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  transition: transform 0.6s ease;

  &:hover {
    transform: scale(1.04);
  } */
`;

const colors1 = ['#D32F2F', '#6A1B9A', '#FBC02D', '#1976D2', '#388E3C'];
const labels1 = ['0-20km', '21-40km', '41-60km', '61-80km', '>80km'];

const series1 = [10, 13, 24, 25, 28];

export default function Donut({
  series = series1,
  colors = colors1,
  labels = labels1,
  total,
  heading,
}) {
  const options = {
    chart: {
      type: 'donut',
      animations: {
        enabled: true,
        easing: 'easeinout',
        speed: 1200,
      },
    },
    plotOptions: {
      pie: {
        donut: {
          size: '75%',
        },
      },
    },
    // title: {
    //   text: 'RUNNING KM/DAY',
    //   style: {
    //     fontSize: '14px', // Font size of the title
    //     fontWeight: '700', // Font weight of the title
    //     fontFamily: 'Poppins, sans-serif', // Font family of the title
    //     color: 'var(--color-gray-700)', // Color of the title
    //   },
    // },
    dataLabels: {
      enabled: false,
    },
    responsive: [
      {
        // breakpoint: 200,
        options: {
          chart: {
            // width: 100,
          },
          legend: {
            position: 'center',
          },
        },
      },
    ],
    tooltip: {
      enabled: true,
      theme: 'dark',
      style: {
        fontSize: '1.4rem',
        fontFamily: 'Poppins, sans-serif',
      },
      onDatasetHover: {
        highlightDataSeries: true,
      },
      y: {
        formatter: function (val) {
          return `${((val / total) * 100).toFixed(2)}%`;
        },
      },
    },
    stroke: {
      show: true,
    },
    fill: {
      type: 'gradient',
    },

    legend: {
      horizontalAlign: 'center',
      fontSize: '13px',
      fontFamily: 'Poppins, sans-serif',
      fontWeight: 500,
      labels: {
        colors: 'var(--color-gray-600)',
        useSeriesColors: false,
      },
      itemMargin: {
        horizontal: 10,
        vertical: 4,
      },
      onItemClick: {
        toggleDataSeries: true,
      },
      onItemHover: {
        highlightDataSeries: true,
      },
      offsetX: 10,
    },

    colors: colors,
    labels: labels,
  };

  return (
    <StyledDonut>
      <Heading>{heading}</Heading>
      <Container>
        <Chart
          options={options}
          series={series}
          type="donut"
          width="100%"
          height="100%"
        />
      </Container>
    </StyledDonut>
  );
}
