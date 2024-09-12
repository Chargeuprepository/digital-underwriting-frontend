import {
  AllVerificationGridDesign,
  AllVerificationLayout,
} from '../UI/GridTab';
import VerificationHeader from '../UI/VerificationHeader';
import AccountSummary from './Components/AccountSummary';
import ApplicationDetails from './Components/ApplicationDetails';
import CapsSummary from './Components/CapsSummary';
import HeroCredit from './Components/HeroCredit';
import OtherDetails from './Components/OtherDetails';
import PersonalDetails from './Components/PersonalDetails';

const accountSummary = {
  bureauScore: 763,
  CadSuitFiledCurrentBalance: 0,
  creditAccountActive: 3,
  creditAccountClosed: 3,
  creditAccountDefault: 0,
  creditAccountTotal: 6,
  outstandingBalanceAll: 144713,
  outstandingBalanceSecured: 0,
  outstandingBalanceUnsecured: 144713,
};

const capsSummary = {
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
};
const applicationDetails = {
  amountFinanced: 0,
  bldgNoSocietyName: '',
  city: 'Madhepura',
  countryCode: 'IB',
  flatNoPlotNoHouseNo: 'S O GAJENDRA PRASAD GUPTA PIPRAHI WARD N',
  landmark: '',
  PinCode: 852128,
  roadNoNameAreaLocality: '',
  state: 10,
};
const personalDetails = {
  dateOfBirthApplicant: '1998-05-16',
  firstName: 'RITESH',
  genderCode: 1,
  incomeTaxPan: 'EQWPK1713G',
  lastName: 'KUMAR',
  mobilePhoneNumber: '919876543210',
};
const otherDetails = {
  employmentStatus: '',
  income: 0,
  maritalStatus: '',
  numberOfMajorCreditCardHeld: 0,
  policy: '',
  timeWithEmployer: '',
};

export default function CreditDetailsLayout() {
  return (
    <AllVerificationLayout>
      <VerificationHeader
        verification="credit verification"
        data={{
          name: 'ritesh aggarwal',
          mobile: '9876543021',
          secondIcon: 'mobile',
        }}
      />
      <AllVerificationGridDesign column={'1fr'} row={'12rem repeat(5, auto)'}>
        <HeroCredit />
        <PersonalDetails personalDetails={personalDetails} />
        <ApplicationDetails applicationDetails={applicationDetails} />
        <CapsSummary capsSummary={capsSummary} />
        <AccountSummary accountSummary={accountSummary} />
        <OtherDetails otherDetails={otherDetails} />
      </AllVerificationGridDesign>
    </AllVerificationLayout>
  );
}
