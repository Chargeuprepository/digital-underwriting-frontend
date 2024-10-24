import BarRenderContent from '../../../../UI/BarRenderContent';
import GridTab from '../../UI/GridTab';
import {
  DigiTelSocioTabContainer,
  StyledTelDigiSocioAttributes,
  TabsHeadingDigiTelSocio,
} from '../RiskUI/Flex-Grid';

export default function VPAAttributes({ digitalRef, digitalData }) {
  return (
    <GridTab ref={digitalRef} gridcolumn={'1 / -1'} backgroundcolor="#b8b7ff">
      <DigiTelSocioTabContainer backgroundcolor={['#7dcc50', '#76b852']}>
        <TabsHeadingDigiTelSocio>digital attributes</TabsHeadingDigiTelSocio>
        <StyledTelDigiSocioAttributes>
          {BarRenderContent(digitalData)}
        </StyledTelDigiSocioAttributes>
      </DigiTelSocioTabContainer>
    </GridTab>
  );
}
