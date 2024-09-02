import styled from 'styled-components';

const StyledRiskScore = styled.div`
  grid-row: 1 / 3;
  height: calc(100vh - 9rem);
  background-color: rebeccapurple;
`;

export default function RiskScore() {
  return <StyledRiskScore>RiskScore</StyledRiskScore>;
}
