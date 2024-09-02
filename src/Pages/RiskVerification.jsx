import styled from 'styled-components';
import RiskScoreLayout from '../Features/VerificationResults/RiskScore/RiskScoreLayout';

const StyledRiskVerification = styled.div`
  width: 100vw;
`;

export default function RiskVerification() {
  return (
    <StyledRiskVerification>
      <RiskScoreLayout />
    </StyledRiskVerification>
  );
}
