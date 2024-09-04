import styled from 'styled-components';
import VerificationHeader from '../UI/VerificationHeader';
import RiskScore from './Components/RiskScore';
import PositiveNegative from './Components/PositiveNegative';
import RiskInsights from './Components/RiskInsights';
import SocialAttributes from './Components/Social';
import VPAAttributes from './Components/VPA';
import TelecomAttributes from './Components/Telecom';
import PhoneNameAttributes from './Components/PhoneName';

const StyledRiskScoreLayout = styled.div`
  box-sizing: border-box;
`;
const RiskVerificationInsights = styled.div`
  display: grid;
  grid-template-columns: 1.1fr 1fr 1fr;
  grid-template-rows: 0.6fr 1fr 1fr 1fr 1fr 1fr;
  gap: 2rem;
  padding: 2rem;
  margin-top: 9rem;
`;

export default function RiskScoreLayout() {
  return (
    <StyledRiskScoreLayout>
      <VerificationHeader
        verification="risk verification"
        data={{
          name: 'ritesh aggarwal',
          mobile: '919876540321',
          secondIcon: 'mobile',
        }}
      />
      <RiskVerificationInsights>
        <RiskScore />
        <PositiveNegative />
        <RiskInsights />
        <SocialAttributes />
        <VPAAttributes />
        <TelecomAttributes />
        <PhoneNameAttributes />
      </RiskVerificationInsights>
    </StyledRiskScoreLayout>
  );
}
