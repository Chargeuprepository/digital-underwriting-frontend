import VerificationHeader from '../UI/VerificationHeader';
import {
  AllVerificationGridDesign,
  AllVerificationLayout,
} from '../UI/GridTab';
import Hero from './Components/Hero';
import Owner from './Components/Owner';
import Vehicle from './Components/Vehicle';
import Registration from './Components/Registration';
import Insurance from './Components/Insurance';
import Additional from './Components/Additional';
import AllVerificationAllCategoryTabs from '../UI/AllVerificationAllCategoryTabs';

const heroData = {
  makerDescription: 'tata motors',
  financer: 'Bajaj Finance Limited',
  number: 'dl8scb5674',
};
const ownerData = {
  ownerName: 'JANE DOE',
  fatherName: 'JON DOE SENIOR',
  permanentAddress:
    '221 B, Baker Street, Opposite Wollaton Hall, BANGALORE, KARNATAKA - 560005',
  presentAddress:
    '221 B, Baker Street, Opposite Wollaton Hall, BANGALORE, KARNATAKA - 560005',
  rcMobileNo: null,
  ownerSerialNumber: 1,
};
const vehicleData = {
  chassisNumber: 'XY0RKO00rko000001',
  makerDescription: 'JANE DOE MOTORS LTD',
  manufacturedMonthYear: '12-2014',
  makerModel: 'BEST CAR TOP MODEL ABS BS X',
  engineNumber: '100X20000000000',
};
const registrationData = {
  registrationNumber: 'XY00YZ1004',
  registrationDate: '31-12-2010',
  registeredAt: 'BANGALORE INDIRANAGAR RTO, Karnataka',
  fitnessUpto: '31-12-2030',
  status: 'ACTIVE',
};
const insuranceData = {
  insuranceCompany: 'Jane Doe Company Limited',
  insurancePolicyNumber: '10000000000000000020',
  insuranceValidity: '31-12-2024',
};
const additionalData = {
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
};

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
      <AllVerificationGridDesign column={'1fr'} row={'12rem repeat(5, auto)'}>
        <Hero heroData={heroData} />
        <Owner ownerData={ownerData} />
        <Vehicle
          vehicleData={vehicleData}
          registrationDate={registrationData.registrationDate}
        />
        <Registration registrationData={registrationData} />
        <Insurance insuranceData={insuranceData} />
        <Additional additionalData={additionalData} />
      </AllVerificationGridDesign>
    </AllVerificationLayout>
  );
}
