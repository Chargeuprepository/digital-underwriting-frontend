import VerificationHeader from '../UI/VerificationHeader';
import { AllVerificationLayout } from '../UI/GridTab';
import Hero from './Components/Hero';
import Vehicle from './Components/Vehicle';
import AllVerificationAllCategoryTabs from '../UI/AllVerificationAllCategoryTabs';
import GridMaker from '../../../UI/GridMaker';
import breakCamelCase from '../../../Utils/breakCamelCase';
import { useLocation } from 'react-router-dom';

const vehicleTabs = [
  'owner',
  'registration',
  'insurance',
  'additionalInformation',
];

export default function VehicleDetailsLayout() {
  const location = useLocation();
  const { data: vehicleAPIData } = location.state || {};

  const { additionalInformation, insurance, owner, registration } =
    vehicleAPIData.vehicle.data;
  const details = { additionalInformation, insurance, owner, registration };
  console.log(vehicleAPIData);

  return (
    vehicleAPIData.vehicle.data && (
      <AllVerificationLayout>
        <VerificationHeader
          verification="vehicle verification"
          data={{
            name: vehicleAPIData.vehicle.data.owner.name,
          }}
        />
        <GridMaker
          column={'1fr'}
          row={'12rem repeat(5, auto)'}
          margin="9rem 0 0 0"
          padding="2rem"
          gap="2rem"
        >
          <Hero heroData={vehicleAPIData.vehicle.data.headerData} />
          <Vehicle
            vehicleData={vehicleAPIData.vehicle.data.vehicleInformation}
            registrationDate={
              vehicleAPIData.vehicle.data.vehicleInformation
                .manufacturedMonthYear
            }
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
                data={details[tab]}
              />
            );
          })}
        </GridMaker>
      </AllVerificationLayout>
    )
  );
}
