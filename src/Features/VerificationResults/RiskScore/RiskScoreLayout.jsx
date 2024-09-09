import styled from 'styled-components';
import VerificationHeader from './UI/VerificationHeader';
import RiskScore from './Components/RiskScore';
import PositiveNegative from './Components/PositiveNegative';
import RiskInsights from './Components/RiskInsights';
import SocialAttributes from './Components/Social';
import VPAAttributes from './Components/VPA';
import TelecomAttributes from './Components/Telecom';
import { useEffect, useRef, useState } from 'react';
import { categorizePlatforms } from './fun';

const StyledRiskScoreLayout = styled.div`
  box-sizing: border-box;
`;
const RiskVerificationInsights = styled.div`
  display: grid;
  grid-template-columns: 0.9fr 1fr 1fr;
  grid-template-rows: 19rem auto auto auto auto;
  gap: 2rem;
  padding: 2rem;
  margin-top: 9rem;
`;

const posNegData = {
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

const telecomData = {
  alternate_number: '',
  current_network_name: 'Reliance Jio',
  current_network_region: 'Delhi',
  is_phone_reachable: 'TRUE',
  number_has_porting_history: 'TRUE',
  number_billing_type: 'prepaid',
  mobile_fraud: 'FALSE',
  phone_footprint_strength_overall: 'Low',
};

const digitalData = {
  name: 'Suhel',
  source: 'PAYTM',
  vpa: '8392975268@paytm',
  upi_phone_name_match: '-1',
  upi_phone_name_match_score: '-1',
  name_match_score: '0',
  phone_digital_age: '-1',
};

const socialAPIData = {
  amazon: 'Account Found',
  flipkart: 'Account Found',
  ajio: 'Account Found',
  indiamart: 'Account Found',
  jiomart: 'Account Found',
  samsung: 'Account Found',
  instagram: 'Account Found',
  flickr: 'Account Found',
  facebook: 'Account Found',
  pinterest: 'Account Found',
  quora: 'Account Found',
  twitter: 'Account Found',
  whatsapp: 'Account Found',
  isWABusiness: 'Account Found',
  gaana: 'Account Found',
  spotify: 'Account Found',
  toi: 'Account Found',
  github: 'Account Found',
  housing: 'Account Found',
  microsoft: 'Account Found',
  skype: 'Account Found',
  wordpress: 'Account Found',
  zoho: 'Account Found',
  booking: 'Account Found',
  yatra: 'Account Found',
  paytm: 'Account Found',
  phonepe: 'Account Found',
  swiggy: 'Account Found',
  jeevansaathi: 'Account Found',
  shaadi: 'Account Found',
};

export default function RiskScoreLayout() {
  const [score, setScore] = useState(674);
  const [positiveNegative, setPositiveNegative] = useState(posNegData);
  const [socialData, setSocialData] = useState({});
  const socialRef = useRef(null);
  const digitalRef = useRef(null);
  const telecomRef = useRef(null);

  useEffect(function () {
    const data = categorizePlatforms(socialAPIData);
    setSocialData(data);
    console.log(data);
  }, []);

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
        <TelecomAttributes telecomRef={telecomRef} telecomData={telecomData} />
        <VPAAttributes digitalRef={digitalRef} digitalData={digitalData} />
        <SocialAttributes socialRef={socialRef} socialData={socialData} />
      </RiskVerificationInsights>
    </StyledRiskScoreLayout>
  );
}
