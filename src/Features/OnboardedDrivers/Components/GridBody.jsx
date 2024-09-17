import styled from 'styled-components';
import { GridValue, StyledGrid } from '../UI';
import { useMemo, useState } from 'react';

const StyledGridBody = styled.div`
  height: 45rem;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const bodyData = [
  {
    name: 'ritesh kumar',
    karma: '200',
    nps: '50',
    service: '100',
    earnings: '150',
    runKm: '200',
    dpd: '250',
  },
  {
    name: 'neha sharma',
    karma: '1000',
    nps: '150',
    service: '50',
    earnings: '250',
    runKm: '100',
    dpd: '200',
  },
  {
    name: 'ajay patel',
    karma: '500',
    nps: '200',
    service: '250',
    earnings: '50',
    runKm: '150',
    dpd: '100',
  },
  {
    name: 'priya singh',
    karma: '400',
    nps: '100',
    service: '200',
    earnings: '150',
    runKm: '50',
    dpd: '250',
  },
  {
    name: 'vikas mehta',
    karma: '900',
    nps: '250',
    service: '150',
    earnings: '100',
    runKm: '200',
    dpd: '50',
  },
  {
    name: 'sonali gupta',
    karma: '200',
    nps: '50',
    service: '250',
    earnings: '200',
    runKm: '100',
    dpd: '150',
  },
  {
    name: 'amit sharma',
    karma: '700',
    nps: '150',
    service: '100',
    earnings: '250',
    runKm: '200',
    dpd: '100',
  },
  {
    name: 'deepika jain',
    karma: '200',
    nps: '200',
    service: '150',
    earnings: '50',
    runKm: '250',
    dpd: '200',
  },
  {
    name: 'rohit kumar',
    karma: '900',
    nps: '100',
    service: '250',
    earnings: '150',
    runKm: '50',
    dpd: '200',
  },
  {
    name: 'anuj gupta',
    karma: '1000',
    nps: '200',
    service: '100',
    earnings: '250',
    runKm: '100',
    dpd: '150',
  },
  {
    name: 'mohit arora',
    karma: '50',
    nps: '250',
    service: '200',
    earnings: '100',
    runKm: '150',
    dpd: '50',
  },
  {
    name: 'sanya kapoor',
    karma: '150',
    nps: '50',
    service: '150',
    earnings: '200',
    runKm: '100',
    dpd: '250',
  },
  {
    name: 'rahul sharma',
    karma: '250',
    nps: '100',
    service: '200',
    earnings: '50',
    runKm: '200',
    dpd: '150',
  },
  {
    name: 'preeti verma',
    karma: '350',
    nps: '150',
    service: '250',
    earnings: '100',
    runKm: '50',
    dpd: '200',
  },
  {
    name: 'shivani singh',
    karma: '450',
    nps: '200',
    service: '100',
    earnings: '250',
    runKm: '150',
    dpd: '100',
  },
  {
    name: 'amit agrawal',
    karma: '550',
    nps: '50',
    service: '150',
    earnings: '200',
    runKm: '200',
    dpd: '250',
  },
  {
    name: 'isha patel',
    karma: '650',
    nps: '100',
    service: '200',
    earnings: '50',
    runKm: '100',
    dpd: '150',
  },
  {
    name: 'rahul verma',
    karma: '750',
    nps: '150',
    service: '250',
    earnings: '200',
    runKm: '150',
    dpd: '50',
  },
  {
    name: 'tarun kumar',
    karma: '850',
    nps: '200',
    service: '100',
    earnings: '250',
    runKm: '50',
    dpd: '200',
  },
  {
    name: 'divya sharma',
    karma: '950',
    nps: '50',
    service: '150',
    earnings: '100',
    runKm: '200',
    dpd: '150',
  },
  {
    name: 'pradeep singh',
    karma: '1000',
    nps: '100',
    service: '200',
    earnings: '150',
    runKm: '100',
    dpd: '250',
  },
  {
    name: 'megha kapoor',
    karma: '75',
    nps: '200',
    service: '50',
    earnings: '150',
    runKm: '250',
    dpd: '100',
  },
  {
    name: 'karan johar',
    karma: '275',
    nps: '150',
    service: '250',
    earnings: '200',
    runKm: '100',
    dpd: '50',
  },
];

export default function GridBody() {
  function karmaHandler(karmaValue) {
    const value = Number(karmaValue);

    if (value <= 50) {
      return '#ff000084';
    } else if (value <= 400) {
      return '#ff000084';
    } else if (value <= 700) {
      return '#ffee0083';
    } else if (value <= 1000) {
      return '#15ff0087';
    } else {
      return '#fff';
    }
  }

  return (
    <StyledGridBody>
      {bodyData.map((val, i) => {
        // Compute color based on `val.karma`
        const color = useMemo(() => karmaHandler(val.karma), [val.karma]);
        const karmaBg =
          color === '#ff000084'
            ? 'low'
            : color === '#ffee0083'
            ? 'high'
            : color === '#15ff0087'
            ? 'medium'
            : '';

        return (
          <StyledGrid key={i} bgcolor={i % 2 === 0 ? '#f6f6f6' : '#e5e9f2'}>
            <GridValue>{i + 1}</GridValue>
            <GridValue horiScroll={'true'}>{val.name}</GridValue>
            <GridValue
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <div
                style={{
                  height: '45%',
                  width: '70%',
                  backgroundColor: color,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  fontSize: '1.2rem',
                  fontWeight: '600',
                  borderRadius: '10px',
                  color: 'var(--color-gray-800)',
                  textTransform: 'uppercase',
                }}
              >
                {karmaBg}
              </div>
            </GridValue>
            <GridValue>{val.dpd}</GridValue>
            <GridValue>{val.service}</GridValue>
            <GridValue>{val.runKm}</GridValue>
            <GridValue>{val.nps}</GridValue>
          </StyledGrid>
        );
      })}
    </StyledGridBody>
  );
}
