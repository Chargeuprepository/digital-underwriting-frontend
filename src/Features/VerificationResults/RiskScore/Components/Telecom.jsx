import GridTab from '../UI/GridTab';
import {
  DigiTelSocioTabContainer,
  renderContent,
  StyledTelDigiSocioAttributes,
  TabsHeadingDigiTelSocio,
} from '../UI/Flex-Grid';

export default function TelecomAttributes({ telecomRef, telecomData }) {
  return (
    <GridTab ref={telecomRef} gridcolumn={'1 / -1'} backgroundcolor="#b8b7ff">
      <DigiTelSocioTabContainer backgroundcolor={['#6190e8', '#6190e8']}>
        <TabsHeadingDigiTelSocio>telecom attributes</TabsHeadingDigiTelSocio>
        <StyledTelDigiSocioAttributes>
          {renderContent(telecomData)}
        </StyledTelDigiSocioAttributes>
      </DigiTelSocioTabContainer>
    </GridTab>
  );
}
