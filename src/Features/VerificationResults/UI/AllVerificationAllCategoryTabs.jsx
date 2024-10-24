import BarRenderContent from '../../../UI/BarRenderContent';
import StyledVehicleInfoGridMaker from '../VehicleDetails/VehicleUI/StyledVehicleInfoGridMaker';
import { VehicleHeading } from '../VehicleDetails/VehicleUI/VehicleHeading';
import StyledGridTab from './GridTab';

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
        {BarRenderContent(data)}
      </StyledVehicleInfoGridMaker>
    </StyledGridTab>
  );
}
