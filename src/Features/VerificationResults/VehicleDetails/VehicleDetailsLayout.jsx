import styled from 'styled-components';
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

export default function VehicleDetailsLayout() {
  return (
    <AllVerificationLayout>
      <VerificationHeader
        verification="vehicle verification"
        data={{
          name: 'ritesh aggarwal',
          mobile: '9876543021',
          secondIcon: 'mobile',
        }}
      />
      <AllVerificationGridDesign column={'1fr'} row={'12rem repeat(5, 1fr)'}>
        <Hero heroData={heroData} />
        <Owner ownerData={ownerData} />
        <Vehicle vehicleData={vehicleData} />
        <Registration />
        <Insurance />
        <Additional />
      </AllVerificationGridDesign>
    </AllVerificationLayout>
  );
}
