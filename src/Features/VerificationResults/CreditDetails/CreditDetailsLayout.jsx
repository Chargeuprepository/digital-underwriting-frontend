import { useLocation } from 'react-router-dom';
import GridMaker from '../../../UI/GridMaker';
import breakCamelCase from '../../../Utils/breakCamelCase';
import AllVerificationAllCategoryTabs from '../UI/AllVerificationAllCategoryTabs';
import { AllVerificationLayout } from '../UI/GridTab';
import VerificationHeader from '../UI/VerificationHeader';
import HeroCredit from './Components/HeroCredit';

const data = {
  accountSummary: {
    bureauScore: 763,
    CadSuitFiledCurrentBalance: 0,
    creditAccountActive: 3,
    creditAccountClosed: 3,
    creditAccountDefault: 0,
    creditAccountTotal: 6,
    outstandingBalanceAll: 144713,
    outstandingBalanceSecured: 0,
    outstandingBalanceUnsecured: 144713,
  },
  CAPSSummary: {
    CapsLast180Days: 1,
    CapsLast30Days: 0,
    CapsLast7Days: 0,
    CapsLast90Days: 1,
    nonCreditCapsLast180Days: 0,
    nonCreditCapsLast30Days: 0,
    nonCreditCapsLast7Days: 0,
    nonCreditCapsLast90Days: 0,
    totalCapsLast180Days: 1,
    totalCapsLast30Days: 0,
    totalCapsLast7Days: 0,
    totalCapsLast90Days: 1,
  },
  applicationDetails: {
    amountFinanced: 0,
    bldgNoSocietyName: '',
    city: 'Madhepura',
    countryCode: 'IB',
    flatNoPlotNoHouseNo: 'S O GAJENDRA PRASAD GUPTA PIPRAHI WARD N',
    landmark: '',
    PinCode: 852128,
    roadNoNameAreaLocality: '',
    state: 10,
  },
  personalDetails: {
    dateOfBirthApplicant: '1998-05-16',
    firstName: 'RITESH',
    genderCode: 1,
    incomeTaxPan: 'EQWPK1713G',
    lastName: 'KUMAR',
    mobilePhoneNumber: '919876543210',
  },
  otherDetails: {
    employmentStatus: '',
    income: 0,
    maritalStatus: '',
    numberOfMajorCreditCardHeld: 0,
    policy: '',
    timeWithEmployer: '',
  },
};

const creditTabs = [
  'accountSummary',
  'personalDetails',
  'applicationDetails',
  'capsSummary',
  'otherDetails',
];

export default function CreditDetailsLayout() {
  const location = useLocation();
  const { data: creditAPIData } = location.state || {};

  const headerData = creditAPIData.credit.INProfileResponse.header;
  const heroData = creditAPIData.credit.INProfileResponse.hero;
  const {
    accountSummary,
    personalDetails,
    applicationDetails,
    capsSummary,
    otherDetails,
  } = creditAPIData.credit.INProfileResponse;
  const otherData = {
    accountSummary,
    personalDetails,
    applicationDetails,
    capsSummary,
    otherDetails,
  };

  return (
    <AllVerificationLayout>
      <VerificationHeader
        verification="credit verification"
        data={{
          name: headerData.name,
          mobile: headerData.mobile,
          secondIcon: 'mobile',
        }}
      />
      <GridMaker
        column={'1fr'}
        row={'20rem repeat(5, auto)'}
        margin="9rem 0 0 0"
        padding="2rem"
        gap="2rem"
      >
        <HeroCredit heroData={heroData} />
        {creditTabs.map((tab, i) => {
          return (
            <AllVerificationAllCategoryTabs
              key={i}
              backgroundcolor={`var(--color-verification-credit-${
                i % 2 === 0 ? 'dark' : 'light'
              })`}
              padding={'3rem 4rem 6rem 4rem'}
              categoryName={breakCamelCase(tab)}
              data={otherData[tab]}
            />
          );
        })}
      </GridMaker>
    </AllVerificationLayout>
  );
}
