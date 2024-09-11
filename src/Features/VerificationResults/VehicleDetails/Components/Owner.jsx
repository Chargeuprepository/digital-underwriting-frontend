import StyledGridTab, { renderContent } from '../../UI/GridTab';
import { VehicleHeading } from '../UI/VehicleHeading';
import StyledVehicleInfoGridMaker from '../UI/StyledVehicleInfoGridMaker';

export default function Owner({ ownerData }) {
  return (
    <StyledGridTab
      height={''}
      backgroundcolor={'#fadb7f'}
      padding={'3rem 4rem'}
    >
      <VehicleHeading>owner details</VehicleHeading>
      <StyledVehicleInfoGridMaker>
        {renderContent(ownerData)}
      </StyledVehicleInfoGridMaker>
    </StyledGridTab>
  );
}
