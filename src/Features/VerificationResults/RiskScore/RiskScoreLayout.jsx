import styled from 'styled-components';
import VerificationHeader from '../UI/VerificationHeader';
import RiskScore from './Components/RiskScore';
import PositiveNegative from './Components/PositiveNegative';
import RiskInsights from './Components/RiskInsights';
import SocialAttributes from './Components/Social';
import VPAAttributes from './Components/VPA';
import TelecomAttributes from './Components/Telecom';
import PhoneNameAttributes from './Components/PhoneName';
import { useRef, useState } from 'react';

const StyledRiskScoreLayout = styled.div`
  box-sizing: border-box;
`;
const RiskVerificationInsights = styled.div`
  display: grid;
  grid-template-columns: 0.9fr 1fr 1fr;
  grid-template-rows: 19rem 1fr 1fr 1fr 1fr 1fr;
  gap: 2rem;
  padding: 2rem;
  margin-top: 9rem;
`;

const data = {
  positives: [
    'Person name does not match against bank records.',
    "Person's name matches against bank records.",
    "Person's name matched against majority of records in Bureau's network.",
  ],
  negatives: [
    'Person name does not match against bank records.',
    'Person has negligible social media presence.',
    "Person's phone has a digital age of less than 6 months.",
  ],
};

const riskInsightsData = {
  digital: {
    digital_risk: 'high',
    phone_name: 'ritesh aggarwal',
    phone_name_match_score: 1,
    phone_digital_age: -1,
  },
  telecom: {
    telecom_risk: 'low',
    phone_rechargable: 'true',
    current_network_region: 'delhi',
    phone_footprint_strength: 'low',
  },
  identity: { identity_risk: 'medium' },
  social: {
    social_score: '320',
    social_media_count: 6,
    social_media_score: 5.5,
    ecommerce_score: 1.9,
    work_utility_score: 2,
  },
};

export default function RiskScoreLayout() {
  const [score, setScore] = useState(789);
  const [positiveNegative, setPositiveNegative] = useState(data);
  const socialRef = useRef(null);
  const digitalRef = useRef(null);
  const telecomRef = useRef(null);

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
        <RiskScore score={score} />
        <PositiveNegative positiveNegative={positiveNegative} />
        <RiskInsights
          riskInsightsData={riskInsightsData}
          allRef={[socialRef, digitalRef, telecomRef]}
        />
        <SocialAttributes socialRef={socialRef} />
        <VPAAttributes digitalRef={digitalRef} />
        <TelecomAttributes telecomRef={telecomRef} />
        <PhoneNameAttributes />
      </RiskVerificationInsights>
    </StyledRiskScoreLayout>
  );
}
