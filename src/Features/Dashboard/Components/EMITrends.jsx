import styled from 'styled-components';
import NightingaleChart from '../../../UI/Charts/Nightingale';

const ConfusionMatrixContainer = styled.div`
  grid-column: 3 / 5;
  grid-row: 2;
  border-radius: 1rem;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  padding: 2rem 2rem 1.5rem 1rem;
  transition: transform 0.6s ease;
  background: linear-gradient(
    to left,
    var(--color-gray-50),
    var(--color-gray-50)
  );

  &:hover {
    transform: scale(1.04);
  }
`;
const MainHeading = styled.div`
  width: 100%;
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--color-gray-700);
  text-transform: uppercase;
  letter-spacing: 0.6px;
  padding-left: 0.6rem;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`;

export default function EMITrends({ emiTrends }) {
  return (
    <ConfusionMatrixContainer>
      <MainHeading>EMI TRENDS</MainHeading>
      {emiTrends && <NightingaleChart emiTrends={emiTrends}></NightingaleChart>}
    </ConfusionMatrixContainer>
  );
}
