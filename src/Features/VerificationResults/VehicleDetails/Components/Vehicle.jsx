import StyledGridTab, { renderContent } from '../../UI/GridTab';
import StyledVehicleInfoGridMaker from '../UI/StyledVehicleInfoGridMaker';
import { VehicleHeading } from '../UI/VehicleHeading';

export default function Vehicle({ vehicleData }) {
  return (
    <StyledGridTab backgroundcolor={'#bafca4'} padding={'3rem 4rem'}>
      <VehicleHeading>vehicle datails</VehicleHeading>
      <StyledVehicleInfoGridMaker>
        {renderContent(vehicleData)}
      </StyledVehicleInfoGridMaker>
    </StyledGridTab>
  );
}
