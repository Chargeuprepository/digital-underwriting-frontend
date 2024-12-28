import styled from 'styled-components';
import AreaChart from '../../../UI/Charts/AreaChart';

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
    to left,
    var(--color-gray-0),
    var(--color-gray-50)
  );
  &:hover {
    transform: scale(1.04);
  }
`;

export default function Churned({
  lastSixMonthDrivers = [],
  churnedDriversData = [],
}) {
  const series = [
    {
      name: 'New Drivers',
      data: [
        lastSixMonthDrivers[0]?.count,
        lastSixMonthDrivers[1]?.count,
        lastSixMonthDrivers[2]?.count,
        lastSixMonthDrivers[3]?.count,
        lastSixMonthDrivers[4]?.count,
        lastSixMonthDrivers[5]?.count,
      ],
      // color: '#1e90ff',
    },
    {
      name: 'Churned',
      data: [
        churnedDriversData[0]?.count,
        churnedDriversData[1]?.count,
        churnedDriversData[2]?.count,
        churnedDriversData[3]?.count,
        churnedDriversData[4]?.count,
        churnedDriversData[5]?.count,
      ],
      // color: '#32cd32',
    },
  ];

  return (
    <ChurnedContainer>
      {lastSixMonthDrivers[0] && (
        <AreaChart
          heading={'Retention Rate'}
          series={series}
          lastSixMonthDrivers={lastSixMonthDrivers}
        />
      )}
    </ChurnedContainer>
  );
}
