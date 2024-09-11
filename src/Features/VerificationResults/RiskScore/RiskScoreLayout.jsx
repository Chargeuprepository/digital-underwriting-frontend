import styled from 'styled-components';
import VerificationHeader from '../UI/VerificationHeader';
import RiskScore from './Components/RiskScore';
import PositiveNegative from './Components/PositiveNegative';
import RiskInsights from './Components/RiskInsights';
import SocialAttributes from './Components/Social';
import VPAAttributes from './Components/VPA';
import TelecomAttributes from './Components/Telecom';
import { useEffect, useRef, useState } from 'react';
import { categorizePlatforms } from '../UI/fun';

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
  positiveInsights: [
    'Person name does not match against bank records.',
    "Person's name matches against bank records.",
    "Person's name matched against majority of records in Bureau's network.",
  ],
  negativeInsights: [
    'Person name does not match against bank records.',
    'Person has negligible social media presence.',
    "Person's phone has a digital age of less than 6 months.",
  ],
};

const riskInsightsData = {
  digital: {
    digitalFootprint: 'high',
    name: 'ritesh aggarwal',
    nameMatchScore: 1,
    phoneDigitalAge: -1,
  },
  telecom: {
    telecomRisk: 'low',
    isPhoneReachable: 'true',
    currentNetworkName: 'delhi',
    phoneFootprintStrengthOverall: 'low',
  },
  identity: { identityConfidence: 'medium' },
  social: {
    socialFootprintScore: '320',
    phoneSocialMediaCount: 6,
    socialMediaScore: 5.5,
    eCommerceScore: 1.9,
    workUtilityScore: 2,
  },
};

const telecomData = {
  alternateNumber: '',
  currentNetworkName: 'Reliance Jio',
  currentNetworkRegion: 'Delhi',
  isPhoneReachable: 'TRUE',
  numberHasPortingHistory: 'TRUE',
  numberBillingType: 'prepaid',
  mobileFraud: 'FALSE',
  phoneFootprintStrengthOverall: 'Low',
};

const digitalData = {
  name: 'Suhel',
  source: 'PAYTM',
  vpa: '8392975268@paytm',
  upiPhoneNameMatch: '-1',
  upiPhoneNameMatchScore: '-1',
  nameMatchScore: '-1',
  phoneDigitalAge: '-1',
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
