import styled from 'styled-components';
import PaymentTrends from './DriverGraphs/PaymentTrends';
import RunKMsTrends from './DriverGraphs/RunKMsTrends';
import EarningTrends from './DriverGraphs/EarningTrends';

export const StyledGraphContainer = styled.div`
  box-shadow: 0 10px 20px rgba(3, 3, 152, 0.245);
  border-radius: 0.6rem;
`;

const StyledDriverGraphs = styled.div`
  grid-row: 3;
  /* background-color: #68e127; */
  height: calc(100vh - 34rem);
  padding: 0 4rem 2.6rem 4rem;
  display: grid;
  grid-template-columns: 1fr 1.15fr 1.15fr;
  gap: 2rem;
`;

export default function DriverGraphs({ earnings, runKm, emi }) {
  return (
    <StyledDriverGraphs>
      <EarningTrends earnings={earnings} />
      <RunKMsTrends runKm={runKm} />
      <PaymentTrends emi={emi} />
    </StyledDriverGraphs>
  );
}
