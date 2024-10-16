import React from 'react';
import ReactApexChart from 'react-apexcharts';
import styled from 'styled-components';
import Container from './Container';

const StyledGuage = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: -2rem;
`;
const Score = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -35%);
  color: var(--color-gray-700);
  font-weight: 600;
`;
const Heading = styled.div`
  /* margin-top: 2rem;
  margin-bottom: -1.5rem; */
  font-size: 1.6rem;
  font-weight: 700;
  color: var(--color-gray-700);
  text-transform: uppercase;
`;

export default function Guage({
  total = 900,
  score = 602,
  heading = 'Radial Bar Chart',
  color,
}) {
  const options = {
    chart: {
      height: 350,
      type: 'radialBar',
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      radialBar: {
        startAngle: -135,
        endAngle: 225,
        hollow: {
          margin: 0,
          size: '65%',
          background: '#fff',
          image: undefined,
          imageOffsetX: 0,
          imageOffsetY: 0,
          position: 'front',
          dropShadow: {
            enabled: true,
            top: 3,
            left: 0,
            blur: 4,
            opacity: 0.2,
          },
        },
        track: {
          background: 'var(--color-gray-50)',
          strokeWidth: '67%',
          margin: 0,
          dropShadow: {
            enabled: true,
            top: -3,
            left: 0,
            blur: 4,
            opacity: 0.35,
          },
        },
        dataLabels: {
          show: false,
          value: {
            show: false,
          },
        },
      },
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        type: 'horizontal',
        shadeIntensity: 0.5,
        gradientToColors: [color],
        inverseColors: true,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100],
      },
    },

    stroke: {
      lineCap: 'round',
    },
  };

  const series = [(score * 100) / 900];

  return (
    <StyledGuage>
      <Heading>{heading}</Heading>
      <Container>
        <ReactApexChart
          options={options}
          series={series}
          type="radialBar"
          height={265}
        />
      </Container>
      <Score>
        {score}/{total}
      </Score>
    </StyledGuage>
  );
}
