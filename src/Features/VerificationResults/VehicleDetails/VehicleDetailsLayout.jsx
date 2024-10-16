import VerificationHeader from '../UI/VerificationHeader';
import { AllVerificationLayout } from '../UI/GridTab';
import Hero from './Components/Hero';
import Vehicle from './Components/Vehicle';
import AllVerificationAllCategoryTabs from '../UI/AllVerificationAllCategoryTabs';
import GridMaker from '../../../UI/GridMaker';
import breakCamelCase from '../../../Utils/breakCamelCase';

const heroData = {
  makerDescription: 'tata motors',
  financer: 'Bajaj Finance Limited',
  number: 'dl8scb5674',
};
const vehicleData = {
  chassisNumber: 'XY0RKO00rko000001',
  makerDescription: 'JANE DOE MOTORS LTD',
  manufacturedMonthYear: '12-2014',
  makerModel: 'BEST CAR TOP MODEL ABS BS X',
  engineNumber: '100X20000000000',
};
const data = {
  ownerData: {
    ownerName: 'JANE DOE',
    fatherName: 'JON DOE SENIOR',
    permanentAddress:
      '221 B, Baker Street, Opposite Wollaton Hall, BANGALORE, KARNATAKA - 560005',
    presentAddress:
      '221 B, Baker Street, Opposite Wollaton Hall, BANGALORE, KARNATAKA - 560005',
    rcMobileNo: null,
    ownerSerialNumber: 1,
  },
  registrationData: {
    registrationNumber: 'XY00YZ1004',
    registrationDate: '31-12-2010',
    registeredAt: 'BANGALORE INDIRANAGAR RTO, Karnataka',
    fitnessUpto: '31-12-2030',
    status: 'ACTIVE',
  },
  insuranceData: {
    insuranceCompany: 'Jane Doe Company Limited',
    insurancePolicyNumber: '10000000000000000020',
    insuranceValidity: '31-12-2024',
  },
  additionalData: {
    bodyTypeDescription: '13',
    color: 'LAVENDER',
    fuelType: 'DIESEL',
    cubicCapacity: '1248',
    grossVehicleWeight: '1620',
    numberOfCylinders: '4',
    unladenWeight: '7400',
    seatingCapacity: '5',
    vehicleCategory: 'LMV',
    vehicleClassDescription: 'Motor Car(LMV)',
    normsDescription: 'BHARAT STAGE X',
  },
};
const vehicleTabs = [
  'ownerData',
  'registrationData',
  'insuranceData',
  'additionalData',
];

export default function VehicleDetailsLayout() {
  return (
    <AllVerificationLayout>
      <VerificationHeader
        verification="vehicle verification"
        data={{
          name: 'ritesh aggarwal',
          mobile: '',
        }}
      />
      <GridMaker
        column={'1fr'}
        row={'12rem repeat(5, auto)'}
        margin="9rem 0 0 0"
        padding="2rem"
        gap="2rem"
      >
        <Hero heroData={heroData} />
        <Vehicle
          vehicleData={vehicleData}
          registrationDate={data.registrationData.registrationDate}
        />

        {vehicleTabs.map((tab, i) => {
          return (
            <AllVerificationAllCategoryTabs
              key={i}
              backgroundcolor={`var(--color-verification-credit-${
                i % 2 === 0 ? 'dark' : 'light'
              })`}
              padding={'3rem 4rem 6rem 4rem'}
              categoryName={breakCamelCase(tab)}
              data={data[tab]}
            />
          );
        })}
      </GridMaker>
    </AllVerificationLayout>
  );
}
