import styled from 'styled-components';
import DriverHeader from './Components/DriverHeader';
import DriverSummary from './Components/DriverSummary';
import DriverGraphs from './Components/DriverGraphs';
import DriverOtherDetails from './Components/DriverOtherDetails';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useOnboardedDriversQueryManager } from '../OnboardedDrivers/GraphQL/queryManager';
import Spinner from '../../UI/Spinner';

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
  background: linear-gradient(
    to right,
    var(--color-brand-original-blue-400),
    var(--color-brand-blue-300)
  );
`;

export default function DriverLayout() {
  const { id } = useParams();
  const { fetchOnboardedDriversData, loading, error, driverData } =
    useOnboardedDriversQueryManager('getDriverData');

  useEffect(function () {
    fetchOnboardedDriversData({
      variables: {
        input: id,
      },
    });
  }, []);
  console.log(id);

  console.log(driverData?.driver);

  const actualData = driverData?.driver;
  const scores = [
    actualData?.financialInformation?.creditScore,
    actualData?.footprintsAndRisk?.riskScore,
    actualData?.cardData?.karmaScore,
  ];
  const footprints = [
    actualData?.footprintsAndRisk?.phoneFootPrint,
    actualData?.footprintsAndRisk?.digitalFootPrint,
    actualData?.footprintsAndRisk?.socialFootPrint,
  ];

  return (
    <>
      {driverData?.driver ? (
        <StyledDriverLayout>
          <DriverHeader
            name={
              actualData.personalInformation.firstName +
              ' ' +
              actualData.personalInformation.lastName
            }
            id={id}
            joiningDate={actualData.onboardedDate}
          />
          <DriverSummary
            karma={actualData.cardData.karmaScore}
            nps={actualData.cardData.nps}
            service={actualData.cardData.service}
            runKm={actualData.cardData.runKm}
            avgDpd={actualData.cardData.avgDpd}
            lossDays={actualData.cardData.lossDays}
            aon={actualData.cardData.aon}
            scores={scores}
            footprints={footprints}
          />
          <DriverGraphs
            earningVsExpense={actualData.earningVsExpense}
            runKm={actualData.runKmInformation}
            emi={actualData.emi}
          />
          <DriverOtherDetails userData={actualData} />
        </StyledDriverLayout>
      ) : (
        <Spinner />
      )}
    </>
  );
}
