import styled from 'styled-components';
import DriverHeader from './Components/DriverHeader';
import DriverSummary from './Components/DriverSummary';
import DriverGraphs from './Components/DriverGraphs';
import DriverOtherDetails from './Components/DriverOtherDetails';
import { useLocation } from 'react-router-dom';

const userData = {
  personalInformation: {
    firstName: 'Mani',
    lastName: 'Prabhat',
    dob: '15-May-0191', // Year might need correction
    age: 33,
    gender: 'Male',
    maritalStatus: 'Married',
    numberOfChildren: 2,
    address: 'xyz',
    city: 'New Delhi',
    state: 'Delhi',
    houseOwnershipType: 'Owned',
  },
  contactInformation: {
    mobileNo: '9587515789',
    adhaarNo: '543000000000', // Adjusted from scientific notation
    panNo: 'EUYHK2578G',
    upiId: '8754698@ybl',
  },
  vehicleInformation: {
    vehicleType: 'E-Rickshaw',
    vehicleMake: 'Mahindra',
    rcNumber: 'DL525458G',
    registrationDate: '12-Jul-15',
    vehicleAgeInMonths: 9,
    vehicleOwnership: 'Owned',
    vehicleInsured: true,
    insurerName: 'HDFC',
    vehicleUnderFinance: true,
    financerName: 'xyz',
  },
  businessInformation: {
    businessSegment: 'B2B',
    dealerMapping: 'xyz',
    driverOccupation: 'Full Time',
    paymentFrequency: 'Monthly',
    approxMonthlyIncome: 30000,
    numberOfEarningMembersInFamily: 2,
    smartphoneUser: true,
  },
  financialInformation: {
    bank: 'SBI',
    accountNo: '201000000000', // Adjusted from scientific notation
    cibilScore: 752,
    riskScore: 850,
    downPayment: null,
    emi: null,
    tenure: null,
  },
  socialAndDigitalInformation: {
    socialScore: 245,
    digitalAge: 'Medium',
    telecomRisk: 'High',
    digitalFootprint: 'Low',
    identityConfidence: 'High',
  },
};

const StyledDriverLayout = styled.div`
  display: grid;
`;

export default function DriverLayout() {
  const location = useLocation();
  const { id, name, nps, service, runKm, dpd, karma } = location.state?.data;

  return (
    <StyledDriverLayout>
      <DriverHeader name={name} id={id} />
      <DriverSummary
        karma={karma}
        nps={nps}
        service={service}
        runKm={runKm}
        dpd={dpd}
      />
      <DriverGraphs />
      <DriverOtherDetails />
    </StyledDriverLayout>
  );
}
