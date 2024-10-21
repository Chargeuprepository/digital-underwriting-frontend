import styled from 'styled-components';
import PaymentTrends from './DriverGraphs/PaymentTrends';
import RunKMsTrends from './DriverGraphs/RunKMsTrends';
import EarningTrends from './DriverGraphs/EarningTrends';

export const StyledGraphContainer = styled.div`
  box-shadow: 0 10px 20px rgba(26, 26, 41, 0.245);
  border-radius: 0.6rem;
`;

const StyledDriverGraphs = styled.div`
  grid-row: 3;
  /* background-color: #68e127; */
  height: calc(100vh - 34rem);
  padding: 0 4rem 2.6rem 4rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1.2fr;
  gap: 2rem;
`;

export default function DriverGraphs() {
  return (
    <StyledDriverGraphs>
      <RunKMsTrends />
      <EarningTrends />
      <PaymentTrends />
    </StyledDriverGraphs>
  );
}
