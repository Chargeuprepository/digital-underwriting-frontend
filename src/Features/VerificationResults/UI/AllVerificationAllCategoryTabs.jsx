import StyledVehicleInfoGridMaker from '../VehicleDetails/VehicleUI/StyledVehicleInfoGridMaker';
import { VehicleHeading } from '../VehicleDetails/VehicleUI/VehicleHeading';
import StyledGridTab, { renderContent } from './GridTab';

export default function AllVerificationAllCategoryTabs({
  height,
  backgroundcolor,
  padding,
  categoryName,
  data,
}) {
  return (
    <StyledGridTab
      height={height}
      backgroundcolor={backgroundcolor}
      padding={padding}
    >
      <VehicleHeading>{categoryName}</VehicleHeading>
      <StyledVehicleInfoGridMaker>
        {renderContent(data)}
      </StyledVehicleInfoGridMaker>
    </StyledGridTab>
  );
}
