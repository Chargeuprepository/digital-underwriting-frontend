import styled from 'styled-components';
import GridTab from '../../UI/GridTab';
import ScoreChart from '../../UI/ScoreChart';
import WhereYouStandTable from '../RiskUI/WhereYouStandTable';

const RiskScoreContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: var(--color-gray-10);
  background: linear-gradient(to bottom, #def1f4, #ccede8);
  border-radius: 0.6rem;
  border: 1px solid var(--color-gray-100);
  padding: 3rem;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 0.12fr 0.44fr 1fr;
  gap: 1rem;
`;
const RiskHeading = styled.div`
  /* background-color: #a96575; */
  text-transform: uppercase;
  font-size: 2.6rem;
  font-weight: 600;
  color: var(--color-gray-700);
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ChartContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const WhereYouStand = styled.div``;

const whereIStand = [
  { score: '0-400', percent: '4.76%', color: '#00953c' },
  { score: '401-500', percent: '32.20%', color: '#1aa050' },
  { score: '501-600', percent: '40.64%', color: '#f9f906' },
  { score: '601-750', percent: '22.40%', color: '#ff9c38' },
  { score: '751-999', percent: '0.00%', color: '#f01010' },
];

export default function RiskScore({ riskScore }) {
  const heightprop = 'calc(100vh - 13rem)';

  return (
    <GridTab gridrow={'1/3'} style={{ height: heightprop }}>
      <RiskScoreContainer>
        <RiskHeading>risk score</RiskHeading>
        <ChartContainer>
          <ScoreChart param={riskScore} />
        </ChartContainer>
        <WhereYouStand>
          <WhereYouStandTable whereIStand={whereIStand} riskScore={riskScore} />
        </WhereYouStand>
      </RiskScoreContainer>
    </GridTab>
  );
}
