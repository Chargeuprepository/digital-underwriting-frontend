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
    to right,
    var(--color-gray-0),
    var(--color-gray-50)
  );
  &:hover {
    transform: scale(1.04);
  }
`;

export default function Churned() {
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
      <AreaChart heading={'Retention Rate'} series={series} />
    </ChurnedContainer>
  );
}
