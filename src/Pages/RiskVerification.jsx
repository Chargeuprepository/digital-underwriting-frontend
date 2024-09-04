import styled from 'styled-components';
import RiskScoreLayout from '../Features/VerificationResults/RiskScore/RiskScoreLayout';

const StyledRiskVerification = styled.div`
  overflow-x: hidden;
`;

export default function RiskVerification() {
  return (
    <StyledRiskVerification>
      <RiskScoreLayout />
    </StyledRiskVerification>
  );
}
