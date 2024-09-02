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
  width: 100%;
`;
const RiskVerificationInsights = styled.div`
  display: grid;
  grid-template-columns: 1.1fr 1fr 1fr;
  grid-template-rows: 0.55fr 1fr 1fr 1fr 1fr 1fr;
  width: 100%;
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
        {/* <SocialAttributes />
        <VPAAttributes />
        <TelecomAttributes />
        <PhoneNameAttributes /> */}
      </RiskVerificationInsights>
    </StyledRiskScoreLayout>
  );
}
