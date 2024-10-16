import styled from 'styled-components';

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

console.log(userData);

const StyledDriverLayout = styled.div``;

export default function DriverLayout() {
  return <StyledDriverLayout>DriverLayout</StyledDriverLayout>;
}
