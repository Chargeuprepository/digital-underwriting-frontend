import VerificationHeader from '../UI/VerificationHeader';
import RiskScore from './Components/RiskScore';
import PositiveNegative from './Components/PositiveNegative';
import RiskInsights from './Components/RiskInsights';
import SocialAttributes from './Components/Social';
import VPAAttributes from './Components/VPA';
import TelecomAttributes from './Components/Telecom';
import { useEffect, useRef, useState } from 'react';
import { categorizePlatforms } from '../UI/fun';
import { AllVerificationLayout } from '../UI/GridTab';
import GridMaker from '../../../UI/GridMaker';
import { useLocation } from 'react-router-dom';

const socialAPIData = {
  amazon: 'Account Found',
  flipkart: 'Account Found',
  ajio: 'Account Found',
  indiamart: 'Account Found',
  jiomart: 'Account Found',
  instagram: 'Account Found',
  facebook: 'Account Found',
  whatsapp: 'Account Found',
  isWABusiness: 'Account Found',
  gaana: 'Account Found',
  spotify: 'Account Found',
  housing: 'Account Found',
  booking: 'Account Found',
  yatra: 'Account Found',
  paytm: 'Account Found',
  phonepe: 'Account Found',
  swiggy: 'Account Found',
  jeevansaathi: 'Account Found',
  shaadi: 'Account Found',
};

export default function RiskScoreLayout() {
  const location = useLocation();
  const { data: riskAPIData } = location.state || {};
  const [socialData, setSocialData] = useState({});
  const socialRef = useRef(null);
  const digitalRef = useRef(null);
  const telecomRef = useRef(null);

  useEffect(function () {
    const data = categorizePlatforms(riskAPIData?.risk?.socialAttributes);
    setSocialData(data);
  }, []);

  return (
    <AllVerificationLayout>
      <VerificationHeader
        verification="risk verification"
        data={{
          name: riskAPIData?.risk?.header?.name,
          mobile: riskAPIData?.risk?.header?.mobile,
          secondIcon: 'mobile',
        }}
      />
      <GridMaker
        column={'0.9fr 1fr 1fr'}
        row={'19rem, repeat(4, auto)'}
        margin="9rem 0 0 0"
        padding="2rem"
        gap="2rem"
      >
        <RiskScore score={riskAPIData?.risk?.riskScore} />
        <PositiveNegative positiveNegative={riskAPIData?.risk?.insights} />
        <RiskInsights
          riskInsightsData={riskAPIData?.risk?.allFourRisk}
          allRef={[socialRef, digitalRef, telecomRef]}
        />
        <TelecomAttributes
          telecomRef={telecomRef}
          telecomData={riskAPIData?.risk?.telecomAttributes}
        />
        <VPAAttributes
          digitalRef={digitalRef}
          digitalData={riskAPIData?.risk?.digitalAttributes}
        />
        <SocialAttributes socialRef={socialRef} socialData={socialData} />
      </GridMaker>
    </AllVerificationLayout>
  );
}
